import React from 'react';
import classes from './Button.module.scss';

export const LinkedButton = ({ children, link = '/', variant = 'secondary' }) => {
  return (
    <a
      type="button"
      className={`${classes.button} ${classes[`variant__${variant}`]}`}
    >
      {children}
    </a>
  );
}
