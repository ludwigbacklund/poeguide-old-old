import React, { createRef } from 'react';
import styled from 'styled-components';
import debounce from 'lodash/debounce';

interface PopoverState {
  popoverStyles: React.CSSProperties;
  shouldRenderPopover: boolean;
}

interface PopoverProps {
  content: React.ReactNode;
  className?: string;
}

export class Popover extends React.Component<PopoverProps, PopoverState> {
  state = { popoverStyles: {}, shouldRenderPopover: false };
  private anchorRef = createRef<HTMLDivElement>();
  private popoverRef = createRef<HTMLDivElement>();
  private prevPopoverElementSize = { width: 0, height: 0 };

  calculateNewPopoverPosition(mouseX: number, mouseY: number, padding: number) {
    // Re-use previously known size of the popover to prevent it from overflowing every time it re-appears
    const popoverElementSize = {
      width: this.prevPopoverElementSize.width,
      height: this.prevPopoverElementSize.height,
    };

    // Save current popover size
    const popoverElement = this.popoverRef.current;
    if (popoverElement) {
      popoverElementSize.width = popoverElement.offsetWidth;
      popoverElementSize.height = popoverElement.offsetHeight;
      this.prevPopoverElementSize = popoverElementSize;
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
  }

  componentDidMount() {
    const anchorElement = this.anchorRef.current;

    if (anchorElement) {
      anchorElement.addEventListener('touchstart', e => {
        e.preventDefault();
      });

      anchorElement.addEventListener(
        'mousemove',
        debounce(e => {
          const padding = 20;

          const mouseX = e.clientX;
          const mouseY = e.clientY;
          const { newX, newY } = this.calculateNewPopoverPosition(
            mouseX,
            mouseY,
            padding,
          );

          this.setState({
            popoverStyles: {
              top: 0,
              left: 0,
              position: 'absolute',
              transform: `translate3d(${newX}px, ${newY}px, 0)`,
              zIndex: 999,
            },
            shouldRenderPopover: true,
          });
        }, 5),
      );

      anchorElement.addEventListener('mouseout', () => {
        this.setState({ shouldRenderPopover: false });
      });
    }
  }

  render() {
    const { children, content, className } = this.props;
    const { popoverStyles, shouldRenderPopover } = this.state;

    return (
      <>
        {shouldRenderPopover && (
          <PopoverWrapper ref={this.popoverRef} style={popoverStyles}>
            {content}
          </PopoverWrapper>
        )}
        <Anchor className={className} ref={this.anchorRef}>
          {children}
        </Anchor>
      </>
    );
  }
}

const PopoverWrapper = styled.div`
  z-index: 10;
`;

const Anchor = styled.div`
  display: inline-block;
`;
