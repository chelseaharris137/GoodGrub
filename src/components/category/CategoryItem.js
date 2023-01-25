import React from 'react';
import classes from './CategoryItem.module.scss';
import clsx from 'clsx';

export const CategoryItem = ({ category, onClickHandler, selectedCategory }) => {
  const isSelected = category.strCategory === selectedCategory;

  return (
    <button
      className={clsx(classes.item, isSelected && classes.item__selected)}
      onClick={onClickHandler}
      type="button"
    >
      {category.strCategory}
    </button>
  );
}
