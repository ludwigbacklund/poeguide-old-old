import React, { useState, useRef, useLayoutEffect } from 'react';
import styled from 'styled-components';
import throttle from 'lodash/throttle';

const calculateNewPopoverPosition = (
  currentX: number,
  currentY: number,
  popoverWidth: number,
  popoverHeight: number,
) => {
  // Re-use previously known size of the popover to prevent it from overflowing every time it re-appears

  // console.log('calculating');
  // Save current popover size

  const { clientWidth, clientHeight } = document.documentElement;

  // console.log('currentx: ', currentX, 'currenty: ', currentY);
  // console.log('clientWidth: ', clientWidth, 'clientHeight: ', clientHeight);
  // console.log(
  //   'popoverWidth: ',
  //   popoverWidth,
  //   'popoverHeight: ',
  //   popoverHeight,
  // );

  const padding = 20;
  // console.log(popoverSize);

  // Check if the current position and the popover size would cause overflowing in X or Y dimensions and adjust calculated coordinates accordingly
  const newX =
    currentX + popoverWidth + padding > clientWidth
      ? clientWidth - popoverWidth
      : currentX + padding;
  const newY =
    currentY + popoverHeight + padding + window.scrollY > clientHeight
      ? clientHeight - popoverHeight
      : currentY + padding + window.scrollY;

  // Check if the mouse would overlap with the popover and flip the popover to the other side of the cursor if so
  // if (currentX >= newX) newX = currentX - popoverWidth - padding;
  // console.log('newx: ', newX, 'newy: ', newY);

  return { x: newX, y: newY };
};

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
  // const [popoverStyles, setPopoverStyles] = useState({});
  // const [prevPopoverElementSize, setPrevPopoverElementSize] = useState({
  //   width: 0,
  //   height: 0,
  // });
  const [clientPosition, setClientPosition] = useState({ x: 0, y: 0 });
  const [popoverPosition, setPopoverPosition] = useState({ x: 0, y: 0 });
  const [popoverSize, setPopoverSize] = useState({ width: 0, height: 0 });
  const [shouldRenderPopover, setShouldRenderPopover] = useState(false);
  // const [isFirstRender, setIsFirstRender] = useState(true);
  const popoverRef = useRef<HTMLDivElement>(null);

  // const hidePopover = useCallback(() => {
  //   console.log('hiding in document event');
  //   setShouldRenderPopover(false);
  // }, []);
  // useLayoutEffect(() => {
  //   document.addEventListener('touchstart', hidePopover);
  //   return () => document.removeEventListener('touchstart', hidePopover);
  // }, []);

  // useLayoutEffect(() => {
  //   if (isFirstRender && popoverRef.current) {
  //     setIsFirstRender(false);
  //     renderPopover();
  //   }
  // });

  useLayoutEffect(() => {
    if (popoverRef.current) {
      // console.log('popoverelement', popoverElement.getBoundingClientRect());
      setTimeout(
        () =>
          setPopoverSize({
            width: popoverRef.current ? popoverRef.current.offsetWidth : 0,
            height: popoverRef.current ? popoverRef.current.offsetHeight : 0,
          }),
        500,
      );
    }
  }, [popoverRef.current]);

  useLayoutEffect(() => {
    const { x, y } = calculateNewPopoverPosition(
      clientPosition.x,
      clientPosition.y,
      popoverSize.width,
      popoverSize.height,
    );
    setPopoverPosition({ x, y });
  }, [clientPosition, popoverSize]);

  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e.touches[0];
    e.preventDefault();
    console.log('------- touch');
    setClientPosition({ x: clientX, y: clientY });
    setShouldRenderPopover(true);
  };

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    e.preventDefault();
    setClientPosition({ x: clientX, y: clientY });
    // console.log('mousemove');
    setShouldRenderPopover(true);
  };

  return (
    <>
      {(shouldRenderPopover || alwaysShow) && (
        <PopoverWrapper
          ref={popoverRef}
          style={{
            top: 0,
            left: 0,
            position: 'absolute',
            transform: `translate3d(${popoverPosition.x}px, ${popoverPosition.y}px, 0)`,
            zIndex: 999,
          }}
          data-testid='popover'
        >
          {content}
        </PopoverWrapper>
      )}
      <Anchor
        onTouchStart={onTouchStart}
        onMouseMove={throttle(onMouseMove, 15)}
        onMouseOut={() => setShouldRenderPopover(false)}
        className={className}
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
