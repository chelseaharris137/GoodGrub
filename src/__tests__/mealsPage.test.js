import React from 'react';
import { render } from '@testing-library/react';
import { IngredientsTable, SearchBar, SingleMealCard } from '@/components';

describe('`IngredientsTable` component', () => {
  it('Does `IngredientsTable` match DOM Snapshot', () => {
    const props = {
      ingredientsWithMeasures: [
        { index: 1, ingredient: 'flour', measure: '1 cup' },
        { index: 2, ingredient: 'sugar', measure: '1/2 cup' },
        { index: 3, ingredient: 'vanilla', measure: '1/2 teaspoon' },
      ],
    };

    const ingredientsTable = render(<IngredientsTable {...props} />);

    expect(ingredientsTable).toMatchSnapshot();
  });
});

describe('`SearchBar` component', () => {
  it('Does `SearchBar` match DOM Snapshot', () => {
    const props = {
      searchText: 'hello world',
      setSearchText: () => {},
    };

    const searchBar = render(<SearchBar {...props} />);

    expect(searchBar).toMatchSnapshot();
  });
});

describe('`SingleMealCard` component', () => {
  it('Does `SingleMealCard` match DOM Snapshot', () => {
    const props = {
      meal: {
        idMeal: '45667',
        strMeal: 'BBQ Chicken & Rice',
        strMealThumb: '/image.jpg',
      },
    };

    const singleMealCard = render(<SingleMealCard {...props} />);

    expect(singleMealCard).toMatchSnapshot();
  });
});
