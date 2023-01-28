import React from 'react';
import { render } from '@testing-library/react';
import { Categories, CategoryItem } from '@/components';

describe('`Categories` component', () => {
  it('Does `Categories` match DOM Snapshot', () => {
    const props = {
      categories: [
        { strCategory: 'dog', idCategory: 1 },
        { strCategory: 'cat', idCategory: 2 },
        { strCategory: 'bird', idCategory: 3 },
      ],
      selectedCategory: 'dog',
    };

    const categories = render(<Categories {...props} />);

    expect(categories).toMatchSnapshot();
  });
});

describe('`CategoryItem` component', () => {
  it('Does `CategoryItem` match DOM Snapshot', () => {
    const props = {
      category: { strCategory: 'dog', idCategory: 1 },
      selectedCategory: 'dog',
    };

    const categoryItem = render(<CategoryItem {...props} />);

    expect(categoryItem).toMatchSnapshot();
  });
});
