import { BeatLoader } from 'react-spinners';
import { Button, IngredientsTable, PointText, Text, Title } from '@/components';
import { FaHeartBroken, FaHeart } from 'react-icons/fa';
import { useQuery } from 'react-query';
import { useRouter } from 'next/router';
import Image from 'next/image';
import React, { useEffect } from 'react';
import axios from 'axios';
import classes from './meals.module.scss';
import toast from 'react-hot-toast';

export const getSingleMeal = async ({ queryKey }) => {
  const { data } = await axios.get(`/lookup.php?i=${queryKey[1]}`);

  return data?.meals?.[0];
};

export default function SingleMeals() {
  const [isSaved, setIsSaved] = React.useState(false);
  const router = useRouter();

  const { id } = router.query;

  const { data, isLoading, isError } = useQuery(['singleMeal', id], getSingleMeal);

  useEffect(() => {
    if (localStorage.getItem('savedMeals')) {
      const savedMeals = JSON.parse(localStorage.getItem('savedMeals'));

      if (savedMeals.includes(id)) {
        setIsSaved(true);
      } else {
        setIsSaved(false);
      }
    } else {
      localStorage.setItem('savedMeals', JSON.stringify([]));
    }
  }, [id]);

  if (isError) {
    return <div>Error</div>;
  }

  if (isLoading || !data) {
    return (
      <BeatLoader color="#fff" size={20} />
    );
  }

  const ingredients = Object.keys(data).filter((key) => key.startsWith('strIngredient')).filter((key) => data[key] !== '' && data[key] !== null);

  const ingredientsWithMeasures = ingredients.map((key, index) => ({
    index: index + 1,
    ingredient: data[key],
    measure: data[`strMeasure${index + 1}`],
  }));

  const handleSaveButtonClick = async () => {
    const savedMeals = JSON.parse(localStorage.getItem('savedMeals'));

    if (!isSaved) {
      savedMeals.push(data.idMeal);

      localStorage.setItem('savedMeals', JSON.stringify(savedMeals));

      toast.success('Meal saved successfully');

      setIsSaved(true);
    } else {
      savedMeals.splice(savedMeals.indexOf(data.idMeal), 1);

      localStorage.setItem('savedMeals', JSON.stringify(savedMeals));

      setIsSaved(false);

      toast.error('Meal Removed successfully');
    }
  };

  return (
    <div className={classes.pageWrapper}>
      <div className={classes.topContainer}>
        <div className={classes.img}>
          <Image alt={data.strMeal} height={300} src={data.strMealThumb} style={{borderRadius: '6px'}} width={300} />
        </div>

        <div className={classes.info}>
          <Title variant="primary">{data.strMeal}</Title>

          <PointText className={classes.infoText}>
            Category: {data.strCategory}
          </PointText>

          <PointText className={classes.infoText}>
            Area: {data.strArea}
          </PointText>

          <PointText className={classes.infoText}>
            tags: {data?.strTags?.split(',').join(', ')}
          </PointText>

          {isSaved && (
            <Text className={classes.greenText}>You already saved the meal.</Text>
          )}

          <Button className={classes.saveButton} onClickHandler={handleSaveButtonClick} variant="primary">
            {isSaved ? (
              <>
                <FaHeartBroken />

                Remove
              </>
            ) : (
              <>
                <FaHeart className={classes.saveIcon} />&nbsp;save
              </>
            )}
          </Button>
        </div>
      </div>

      <div className={classes.ingredientsTable}>
        <IngredientsTable ingredientsWithMeasures={ingredientsWithMeasures} />
      </div>

      <div className={classes.instructions}>
        <Title>Instructions</Title>

        {data.strInstructions.split('.').filter((sentence) => sentence !== '').map((sentence) => (
          <PointText key={sentence}>{sentence}.</PointText>
        ))}
      </div>
    </div>
  );
}
