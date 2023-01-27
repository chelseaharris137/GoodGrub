import React from 'react';
import clsx from 'clsx';
import classes from './Text.module.scss';

export const Text = ({ children, className }) => (
  <p className={clsx(classes.text, className)}>{children}</p>
);
