import React from 'react';
import { render } from '@testing-library/react';
import { About } from '@/components';

describe('`About` component', () => {
  it('Does `About` match DOM Snapshot', () => {
    const about = render(<About />);

    expect(about).toMatchSnapshot();
  });
});
