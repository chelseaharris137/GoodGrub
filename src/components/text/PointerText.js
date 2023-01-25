import { Text } from '@/components';
import React from 'react';
import classes from './PointText.module.scss';
import clsx from 'clsx';

export const PointText = ({ children, className }) => {
  return (
    <div className={clsx(classes.pointText, className)}>
      <div className={classes.circle} />
      
      <Text className={classes.text}>{children}</Text>
    </div>
  );
}
