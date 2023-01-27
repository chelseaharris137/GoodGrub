import React from 'react';
import classes from './Button.module.scss';

export const LinkedButton = ({
  children,
  link = '/',
  variant = 'secondary',
}) => {
  return (
    <a
      className={`${classes.button} ${classes[`variant__${variant}`]}`}
      href={link}
      type='button'
    >
      {children}
    </a>
  );
};
