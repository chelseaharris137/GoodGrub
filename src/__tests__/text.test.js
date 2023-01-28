import React from 'react';
import { render } from '@testing-library/react';
import { PointText, Text, Title } from '@/components';

const props = {
  children: 'hello world',
  className: 'classes.infoText',
};

describe('`PointText` component', () => {
  it('Does `PointText` match DOM Snapshot', () => {
    const pointText = render(<PointText {...props} />);

    expect(pointText).toMatchSnapshot();
  });
});

describe('`Text` component', () => {
  it('Does `Text` match DOM Snapshot', () => {
    const text = render(<Text {...props} />);

    expect(text).toMatchSnapshot();
  });
});

describe('`Title` component', () => {
  it('Does `Title` match DOM Snapshot', () => {
    const title = render(<Title {...props} />);

    expect(title).toMatchSnapshot();
  });
});
