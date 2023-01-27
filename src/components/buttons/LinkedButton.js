import React from 'react';
import classes from './Button.module.scss';

export const LinkedButton = ({ children, link = '/', variant = 'secondary' }) => {
  return (
    <a
      href={link}
      type="button"
      className={`${classes.button} ${classes[`variant__${variant}`]}`}
    >
      {children}
    </a>
  );
}
