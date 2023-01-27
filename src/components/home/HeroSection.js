import { HeroImg } from '@/images';
import Image from 'next/image';
import React from 'react';
import { Text } from '../text/Text';
import { LinkedButton } from '../buttons/LinkedButton';
import classes from './HeroSection.module.scss';

export const HeroSection = () => {
  return (
    <section className={classes.hero__section}>
      <div className={classes.hero__container}>
        <div className={classes.hero__info}>
          <h1 className={classes.hero__title}>Find the perfect recipe</h1>

          <br />

          <Text>A listing of easy to make recipes</Text>

          <div className={classes.hero__buttons}>
            <LinkedButton link='/meals' variant='primary'>
              Explore Meals
            </LinkedButton>

            <LinkedButton link='/savedMeals'>Saved Meals</LinkedButton>
          </div>
        </div>

        <div className={classes.hero__img}>
          <Image
            alt='Image of woman in a kitchen slicing tomatoes on a cutting board.'
            src={HeroImg}
            width={400}
          />
        </div>
      </div>
    </section>
  );
};
