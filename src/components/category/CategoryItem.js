import React from 'react';
import clsx from 'clsx';
import classes from './CategoryItem.module.scss';

export const CategoryItem = ({
  category,
  onClickHandler,
  selectedCategory,
}) => {
  const isSelected = category.strCategory === selectedCategory;

  return (
    <button
      className={clsx(classes.item, isSelected && classes.item__selected)}
      onClick={onClickHandler}
      type='button'
    >
      {category.strCategory}
    </button>
  );
};
