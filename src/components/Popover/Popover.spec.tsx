import React from 'react';
import { render, fireEvent } from 'react-testing-library';

import Popover from './Popover';

describe('Popover', () => {
  const renderPopover = (shouldAlwaysShowPopover = false) => {
    return render(
      <Popover>
        {({ anchorRef, popoverRef, popoverStyles, shouldRenderPopover }) => (
          <>
            <div data-testid="anchor-ref" ref={anchorRef} />
            {(shouldRenderPopover || shouldAlwaysShowPopover) && (
              <div
                data-testid="popover-ref"
                ref={popoverRef}
                style={popoverStyles}
              />
            )}
          </>
        )}
      </Popover>,
    );
  };

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
    fireEvent.mouseMove(getByTestId('anchor-ref'), {
      clientX: 10,
    });
    const newTransform = getByTestId('popover-ref').style.transform;

    expect(oldTransform).not.toEqual(newTransform);
  });
});
