import { BeatLoader } from 'react-spinners';
import { PointText, Text, Title } from '@/components';
import { useQueries } from 'react-query';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { getSingleMeal } from './meals/[id]';
import classes from './savedMeals.module.scss';

const SavedMeals = () => {
  const [savedMealsId, setSavedMealsId] = useState([]);
  const queries = savedMealsId.map((id) => ({
    queryKey: ['singleMeal', id],
    queryFn: getSingleMeal,
  }));

  const result = useQueries(queries);

  useEffect(() => {
    if (localStorage.getItem('savedMeals')) {
      setSavedMealsId(JSON.parse(localStorage.getItem('savedMeals')));
    }
  }, []);

  return (
    <div className={classes.pageWrapper}>
      <Title className={classes.pageTitle} variant='primary'>
        My Saved Meal List
      </Title>

      <div className={classes.list_container}>
        {savedMealsId.length <= 0 && <Text>You have no saved meals</Text>}

        {result &&
          result.map(({ data, isLoading }, index) => {
            if (isLoading) {
              return (
                <BeatLoader
                  color='#fff'
                  key={savedMealsId[[index]]}
                  loading={isLoading}
                  size={20}
                />
              );
            }

            return (
              <Link
                className={classes.singleMeal}
                href={`/meals/${data.idMeal}`}
                key={data.idMeal}
              >
                <Title className={classes.mealTitle} variant='secondary'>
                  {data.strMeal}
                </Title>

                <PointText>Category:&nbsp;{data.strCategory}</PointText>

                <PointText>Area:&nbsp;{data.strArea}</PointText>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default SavedMeals;
