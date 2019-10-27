import React from 'react';

import { Popover } from './Popover';
import { render, fireEvent } from '../../utils/custom-render';

const WINDOW_WIDTH = 320;

const getTransformValues = (transform: string) => {
  const transformValues = transform
    .replace(/translate3d|px|\(|\)/gi, '')
    .split(',')
    .map(translateValue => parseInt(translateValue, 10));

  return {
    x: transformValues[0],
    y: transformValues[1],
    z: transformValues[2],
  };
};

describe('Popover', () => {
  const renderPopover = (alwaysShowPopover = false) => {
    return render(
      <Popover alwaysShow={alwaysShowPopover} content={<div />}>
        <div data-testid='anchor-ref' />
      </Popover>,
    );
  };

  beforeAll(() => {
    Object.defineProperty(document.documentElement, 'clientWidth', {
      value: WINDOW_WIDTH,
    });
  });

  it('displays the popover element only when the anchor element is hovered over', async () => {
    const { queryByTestId, getByTestId } = renderPopover();

    expect(queryByTestId('popover')).toBeNull();
    fireEvent.mouseMove(getByTestId('anchor-ref'));
    expect(getByTestId('popover'));
    fireEvent.mouseOut(getByTestId('anchor-ref'));
    expect(queryByTestId('popover')).toBeNull();
  });

  it('moves the popover element with the cursor', () => {
    const { getByTestId } = renderPopover(true);

    const oldTransform = getByTestId('popover').style.transform;
    const oldTransformX = oldTransform && getTransformValues(oldTransform).x;
    fireEvent.mouseMove(getByTestId('anchor-ref'), {
      clientX: 10,
    });
    const newTransform = getByTestId('popover').style.transform;
    console.log(getByTestId('popover').style);
    const newTransformX = newTransform && getTransformValues(newTransform).x;

    expect(newTransformX || 0).toBeGreaterThan(oldTransformX || 0);
  });

  it('should not let the cursor overlap with popover element', () => {
    const { getByTestId } = renderPopover(true);

    fireEvent.mouseMove(getByTestId('anchor-ref'), {
      clientX: WINDOW_WIDTH,
    });

    const transform = getByTestId('popover').style.transform;
    expect(getTransformValues(transform || '').x).toBeLessThan(WINDOW_WIDTH);
  });
});
