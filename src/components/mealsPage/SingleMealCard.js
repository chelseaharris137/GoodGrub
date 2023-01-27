import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Title } from '../text/Title';
import classes from './SingleMealCard.module.scss';

export const SingleMealCard = ({ meal }) => {
  return (
    <Link className={classes.item} href={`/meals/${meal.idMeal}`}>
      <Image
        alt={meal.strMeal}
        height='200'
        src={meal.strMealThumb}
        width='290'
      />

      <Title className={classes.title} variant='secondary'>
        {meal.strMeal}
      </Title>
    </Link>
  );
};
