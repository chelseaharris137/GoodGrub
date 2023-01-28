import React from 'react';
import { render } from '@testing-library/react';
import { Button, LinkedButton } from '@/components';

describe('`Button` component', () => {
  it('Does `Button` match DOM Snapshot', () => {
    const button = render(<Button />);

    expect(button).toMatchSnapshot();
  });
});

describe('`LinkedButton` component', () => {
  it('Does `LinkedButton` match DOM Snapshot', () => {
    const linkedButton = render(<LinkedButton />);

    expect(linkedButton).toMatchSnapshot();
  });
});
