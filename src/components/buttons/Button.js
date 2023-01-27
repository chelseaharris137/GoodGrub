import React from 'react';
import clsx from 'clsx';
import classes from './Button.module.scss';

export const Button = ({
  children,
  className,
  onClickHandler,
  variant = 'secondary',
}) => {
  return (
    <button
      className={clsx(
        classes.button,
        classes[`variant__${variant}`],
        className
      )}
      onClick={onClickHandler}
      type='button'
    >
      {children}
    </button>
  );
};
