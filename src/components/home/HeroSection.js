import { HeroImg } from '@/images';
import { LinkedButton, Text } from '@/components';
import Image from 'next/image';
import React from 'react';
import classes from './HeroSection.module.scss';


export const HeroSection = () => {
  return (
    <section className={classes.hero__section}>
      <div className={classes.hero__container}>
        <div className={classes.hero__info}>
          <h1 className={classes.hero__title}>
            Find the perfect recipe
          </h1>
          
          <br/>

          <Text>A listing of easy to make recipes</Text>

          <div className={classes.hero__buttons}>
            <LinkedButton link="/meals" variant="primary">Explore Meals</LinkedButton>

            <LinkedButton link="/savedMeals">Saved Meals</LinkedButton>
          </div>
        </div>

        <div className={classes.hero__img}>
          <Image src={HeroImg} alt="Image of woman in a kitchen slicing tomatoes on a cutting board." style={{ borderRadius: '6px' }} width={400} />
        </div>
      </div>
    </section>
  );
}
