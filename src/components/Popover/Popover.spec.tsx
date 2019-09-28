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
  const renderPopover = (shouldAlwaysShowPopover = false) => {
    return render(
      <Popover>
        {({ anchorRef, popoverRef, popoverStyles, shouldRenderPopover }) => (
          <>
            <div data-testid='anchor-ref' ref={anchorRef} />
            {(shouldRenderPopover || shouldAlwaysShowPopover) && (
              <div
                data-testid='popover-ref'
                ref={popoverRef}
                style={popoverStyles}
              />
            )}
          </>
        )}
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

    expect(queryByTestId('popover-ref')).toBeNull();
    fireEvent.mouseMove(getByTestId('anchor-ref'));
    expect(getByTestId('popover-ref'));
    fireEvent.mouseOut(getByTestId('anchor-ref'));
    expect(queryByTestId('popover-ref')).toBeNull();
  });

  it('moves the popover element with the cursor', () => {
    const { getByTestId } = renderPopover(true);

    const oldTransform = getByTestId('popover-ref').style.transform;
    const oldTransformX = oldTransform && getTransformValues(oldTransform).x;
    fireEvent.mouseMove(getByTestId('anchor-ref'), {
      clientX: 10,
    });
    const newTransform = getByTestId('popover-ref').style.transform;
    const newTransformX = newTransform && getTransformValues(newTransform).x;

    expect(newTransformX || 0).toBeGreaterThan(oldTransformX || 0);
  });

  it('should not let the cursor overlap with popover element', () => {
    const { getByTestId } = renderPopover(true);

    fireEvent.mouseMove(getByTestId('anchor-ref'), {
      clientX: WINDOW_WIDTH,
    });

    const transform = getByTestId('popover-ref').style.transform;
    expect(getTransformValues(transform || '').x).toBeLessThan(WINDOW_WIDTH);
  });
});
