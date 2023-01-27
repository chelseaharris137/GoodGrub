import React from 'react';
import { Text } from '../text/Text';
import classes from './Footer.module.scss';

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={classes.footer}>
      <Text>Find the perfect recipe</Text>

      <Text className={classes.copyright}>
        &copy; “GoodGrub” {year} All right reserved.
      </Text>
    </footer>
  );
};
