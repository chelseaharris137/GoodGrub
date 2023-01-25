import React from 'react';
import classes from './Title.module.scss';
import clsx from 'clsx';

export const Title = ({ children, className, variant = 'primary' }) => <h2 className={clsx(classes.title, className, classes[`title__${variant}`])}>{children}</h2>;
