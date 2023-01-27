import React from 'react';
import { Text } from '../text/Text';
import { Title } from '../text/Title';
import classes from './About.module.scss';

export const About = () => {
  return (
    <div className={classes.about}>
      <Title className={classes.title}>What is GoodGrub?</Title>

      <Text>
        Welcome to GoodGrub, the ultimate recipe app for delicious and
        easy-to-make meals. Whether you&#39;re a beginner cook or a seasoned pro
        our app has something for everyone.
        <br />
        <br />
        Our app features a wide variety of recipes, from classic comfort foods
        to international dishes and healthy options. We make it easy to find the
        perfect recipe for any occasion, with options sorted by cuisine,
        ingredients, and dietary restrictions.
        <br />
        <br />
        We believe that cooking should be fun, easy, and accessible to everyone,
        which is why we&#39;re dedicated to providing the best recipe app on the
        market. So why wait? Download GoodGrub now and start cooking up a storm!
      </Text>
    </div>
  );
};
