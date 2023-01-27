import React from 'react';
import { CategoryItem } from './CategoryItem';
import classes from './Categories.module.scss';

export const Categories = ({
  categories,
  categoryError,
  categoryIsLoading,
  categoryIsError,
  selectedCategory,
  setSelectedCategory,
  setQuery,
}) => {
  if (categoryIsLoading) {
    return <div>Loading...</div>;
  }

  if (categoryIsError) {
    return (
      <div>
        Error:
        {categoryError.message}
      </div>
    );
  }

  return (
    <div className={classes.categories__container}>
      {categories.map((item) => (
        <CategoryItem
          category={item}
          key={item.idCategory}
          onClickHandler={() => {
            setSelectedCategory(item.strCategory);
            setQuery('');
          }}
          selectedCategory={selectedCategory}
        />
      ))}
    </div>
  );
};
