import React, { useState, useRef, useCallback } from 'react';
import styled from 'styled-components';
import throttle from 'lodash/throttle';

interface PopoverProps {
  content: React.ReactNode;
  className?: string;
  alwaysShow?: boolean;
}

export const Popover: React.SFC<PopoverProps> = ({
  children,
  content,
  className,
  alwaysShow,
}) => {
  const [popoverStyles, setPopoverStyles] = useState({});
  const [shouldRenderPopover, setShouldRenderPopover] = useState(false);
  const [prevPopoverElementSize, setPrevPopoverElementSize] = useState({
    // Estimates to prevent Popover jumping on first render
    width: 380,
    height: 380,
  });
  const anchorRef = useRef<HTMLDivElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);

  const calculateNewPopoverPosition = useCallback(
    (mouseX: number, mouseY: number, padding: number) => {
      // Re-use previously known size of the popover to prevent it from overflowing every time it re-appears
      const popoverElementSize = {
        width: prevPopoverElementSize.width,
        height: prevPopoverElementSize.height,
      };

      // Save current popover size
      const popoverElement = popoverRef.current;
      if (popoverElement) {
        popoverElementSize.width = popoverElement.offsetWidth;
        popoverElementSize.height = popoverElement.offsetHeight;
        setPrevPopoverElementSize(popoverElementSize);
      }

      const clientSize = {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
      };

      // Check if the current mouse position and the popover size would cause overflowing in X or Y dimensions and adjust calculated coordinates accordingly
      let newX =
        mouseX + popoverElementSize.width + padding > clientSize.width
          ? clientSize.width - popoverElementSize.width
          : mouseX + padding;
      const newY =
        mouseY + popoverElementSize.height + padding > clientSize.height
          ? clientSize.height - popoverElementSize.height
          : mouseY + padding;

      // Check if the mouse would overlap with the popover and flip the popover to the other side of the cursor if so
      if (mouseX >= newX) newX = mouseX - popoverElementSize.width - padding;

      return { newX, newY };
    },
    [],
  );

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const padding = 20;

    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const { newX, newY } = calculateNewPopoverPosition(mouseX, mouseY, padding);

    setPopoverStyles({
      top: 0,
      left: 0,
      position: 'absolute',
      transform: `translate3d(${newX}px, ${newY}px, 0)`,
      zIndex: 999,
    });
    setShouldRenderPopover(true);
  };

  return (
    <>
      {(shouldRenderPopover || alwaysShow) && (
        <PopoverWrapper
          ref={popoverRef}
          style={popoverStyles}
          data-testid='popover'
        >
          {content}
        </PopoverWrapper>
      )}
      <Anchor
        onMouseMove={throttle(onMouseMove, 15)}
        onMouseOut={() => setShouldRenderPopover(false)}
        onTouchStart={e => e.preventDefault()}
        className={className}
        ref={anchorRef}
      >
        {children}
      </Anchor>
    </>
  );
};

const PopoverWrapper = styled.div`
  z-index: 10;
  pointer-events: none;
`;

const Anchor = styled.div`
  display: inline-block;
`;
