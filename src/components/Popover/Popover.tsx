import React, { useState, useRef, useLayoutEffect } from 'react';
import styled from 'styled-components';
import throttle from 'lodash/throttle';

const calculateNewPopoverPosition = (
  currentX: number,
  currentY: number,
  popoverWidth: number,
  popoverHeight: number,
) => {
  const { clientWidth, clientHeight } = document.documentElement;

  const padding = 20;
  const scrollY = window.scrollY;

  // Check if the current position and the popover size would cause overflowing in X or Y dimensions and adjust calculated coordinates accordingly
  const isOverflowingX = currentX + popoverWidth + padding > clientWidth;
  const leftPlacement = clientWidth - popoverWidth;
  const rightPlacement = currentX + padding;
  const newX = isOverflowingX ? leftPlacement : rightPlacement;

  const isOverflowingY =
    currentY + popoverHeight + padding + scrollY > clientHeight + scrollY;
  const topPlacement = currentY - popoverHeight - padding + scrollY;
  const bottomPlacement = currentY + padding + scrollY;
  const newY =
    isOverflowingY && topPlacement > 0 ? topPlacement : bottomPlacement;

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
  const [clientPosition, setClientPosition] = useState({ x: 0, y: 0 });
  const [popoverPosition, setPopoverPosition] = useState({ x: 0, y: 0 });
  const [popoverSize, setPopoverSize] = useState({ width: 0, height: 0 });
  const [shouldRenderPopover, setShouldRenderPopover] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);
  const anchorRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const hidePopover = () => {
      setShouldRenderPopover(false);
    };

    if (shouldRenderPopover) {
      document.addEventListener('touchstart', hidePopover);
    } else {
      document.removeEventListener('touchstart', hidePopover);
    }
    return () => document.removeEventListener('touchstart', hidePopover);
  }, [shouldRenderPopover]);

  useLayoutEffect(() => {
    if (popoverRef.current) {
      // console.log('popoverelement', popoverElement.getBoundingClientRect());
      setPopoverSize({
        width: popoverRef.current ? popoverRef.current.offsetWidth : 0,
        height: popoverRef.current ? popoverRef.current.offsetHeight : 0,
      });
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
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
    setClientPosition({ x: clientX, y: clientY });
    setShouldRenderPopover(true);
  };

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    setClientPosition({ x: clientX, y: clientY });
    setShouldRenderPopover(true);

    if (
      popoverRef.current &&
      popoverSize.width === 0 &&
      popoverSize.height === 0
    ) {
      setPopoverSize({
        width: popoverRef.current.offsetWidth,
        height: popoverRef.current.offsetHeight,
      });
    }
  };

  return (
    <>
      {(shouldRenderPopover || alwaysShow) && (
        <div
          ref={popoverRef}
          style={{
            top: 0,
            left: 0,
            position: 'absolute',
            transform: `translate3d(${popoverPosition.x}px, ${popoverPosition.y}px, 0)`,
            visibility:
              popoverSize.width === 0 && popoverSize.height === 0
                ? 'hidden'
                : 'visible',
            zIndex: 999,
          }}
          data-testid='popover'
        >
          {content}
        </div>
      )}
      <Anchor
        ref={anchorRef}
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

const Anchor = styled.div`
  display: inline-block;
`;
