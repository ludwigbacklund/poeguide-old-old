const calculatePopoverPosition = (
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
    isOverflowingY && topPlacement > 0 + scrollY
      ? topPlacement
      : bottomPlacement;

  return { x: newX, y: newY };
};

export default calculatePopoverPosition;
