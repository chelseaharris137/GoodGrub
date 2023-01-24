
import React from 'react';
import classes from './Text.module.scss';
import clsx from 'clsx';

export const Text = ({ children, className }) => 
    <p className={clsx(classes.text, className)}>{children}</p>;
