import React from 'react';
import clsx from 'clsx';
import classes from './Title.module.scss';

export const Title = ({ children, className, variant = 'primary' }) => (
  <h2 className={clsx(classes.title, className, classes[`title__${variant}`])}>
    {children}
  </h2>
);
