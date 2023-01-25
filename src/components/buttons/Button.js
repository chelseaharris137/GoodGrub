import React from 'react';
import classes from './Button.module.scss';
import clsx from 'clsx';

export const Button = ({
  children, className, onClickHandler, variant = 'secondary'
}) => {
  return (
    <button
      type="button"
      className={clsx(classes.button, classes[`variant__${variant}`], className)}
      onClick={onClickHandler}
    >
      {children}
    </button>
  );
}
