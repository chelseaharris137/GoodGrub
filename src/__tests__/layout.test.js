import React from 'react';
import { render } from '@testing-library/react';
import { Footer } from '@/components';

describe('`Footer` component', () => {
  it('Does `Footer` match DOM Snapshot', () => {
    const footer = render(<Footer />);

    expect(footer).toMatchSnapshot();
  });
});
