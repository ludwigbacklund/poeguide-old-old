import React, { useState, useRef, useLayoutEffect } from 'react';
import styled from 'styled-components';
import throttle from 'lodash/throttle';
import { createPortal } from 'react-dom';

import calculatePopoverPosition from '../../utils/calculate-popover-position';

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
  const [isDragging, setIsDragging] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);
  const popoverRoot =
    process.browser && document.getElementById('popover-root');

  useLayoutEffect(() => {
    const hidePopover = () => {
      setShouldRenderPopover(false);
    };

    if (shouldRenderPopover) {
      document.addEventListener('touchstart', hidePopover);
    } else {
      document.removeEventListener('touchstart', hidePopover);
    }
    return () => {
      document.removeEventListener('touchstart', hidePopover);
    };
  }, [shouldRenderPopover]);

  useLayoutEffect(() => {
    if (popoverRef.current) {
      setPopoverSize({
        width: popoverRef.current ? popoverRef.current.offsetWidth : 0,
        height: popoverRef.current ? popoverRef.current.offsetHeight : 0,
      });
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [popoverRef.current]);

  useLayoutEffect(() => {
    const { x, y } = calculatePopoverPosition(
      clientPosition.x,
      clientPosition.y,
      popoverSize.width,
      popoverSize.height,
    );
    setPopoverPosition({ x, y });
  }, [clientPosition, popoverSize]);

  const onTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (isDragging) return;
    const { clientX, clientY } = e.changedTouches[0];
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

  const popoverRender = (
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
  );

  return (
    <>
      {(shouldRenderPopover || alwaysShow) &&
        popoverRoot &&
        createPortal(popoverRender, popoverRoot)}
      <Anchor
        onTouchStart={() => setIsDragging(false)}
        onTouchMove={() => setIsDragging(true)}
        onTouchEnd={onTouchEnd}
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
