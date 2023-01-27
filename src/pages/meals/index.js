import { BeatLoader } from 'react-spinners';
import {
  Categories,
  PointText,
  SearchBar,
  SingleMealCard,
  Text,
} from '@/components';
import { useQuery } from 'react-query';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getCategories, getMeals } from '@/utils';
import classes from './meals.module.scss';

const getQueriedMeals = async ({ queryKey }) => {
  const { data } = await axios.get(`search.php?s=${queryKey[1]}`);

  return data?.meals || [];
};

const override = {
  display: 'inline-block',
  margin: '0 auto',
};

const Meals = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchText, setSearchText] = useState('');
  const [query, setQuery] = useState('');

  const {
    data: categories,
    isLoading: categoryIsLoading,
    isError: categoryIsError,
    error: categoryError,
  } = useQuery(['catagories'], getCategories);

  const {
    data: queriedData,
    isLoading: queryIsLoading,
    isError: queryError,
  } = useQuery(['mealsByQuery', query], getQueriedMeals, {
    enabled: query !== '',
  });

  const { data, isLoading, isError } = useQuery(
    ['mealsByCategory', selectedCategory],
    getMeals,
    {
      enabled: query === '',
    }
  );

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (searchText) {
        setQuery(searchText);

        setSelectedCategory('');
      } else {
        setQuery('');
        if (categories) {
          setSelectedCategory(categories[0].strCategory);
        }
      }
    }, 300);
    return () => {
      setQuery('');

      clearTimeout(timeout);
    };
  }, [searchText, categories]);

  useEffect(() => {
    if (categories) {
      setSelectedCategory(categories[0].strCategory);
    }
  }, [categories]);

  return (
    <div className={classes.meals__page}>
      <SearchBar searchText={searchText} setSearchText={setSearchText} />

      <PointText className={classes.text}>
        search meals or select categories from below.
      </PointText>

      <Categories
        categories={categories}
        categoryError={categoryError}
        categoryIsError={categoryIsError}
        categoryIsLoading={categoryIsLoading}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        setQuery={setQuery}
      />

      {isLoading || categoryIsLoading ? (
        <div className={classes.loadingSpinner}>
          <BeatLoader
            color='#fff'
            cssOverride={override}
            loading={isLoading || categoryIsLoading}
            size={20}
          />
        </div>
      ) : null}

      <div className={classes.meals__container}>
        {!isLoading &&
          !isError &&
          data &&
          data.map((meal) => <SingleMealCard key={meal.idMeal} meal={meal} />)}

        {!queryIsLoading &&
          !queryError &&
          queriedData &&
          queriedData.map((meal) => (
            <SingleMealCard key={meal.idMeal} meal={meal} />
          ))}

        {data &&
          queriedData &&
          data.length === 0 &&
          queriedData.length === 0 && <Text>No meals found</Text>}
      </div>
    </div>
  );
};

export default Meals;
