import React from 'react';
import styled from 'styled-components';

interface PlaceholderProps {
  height: number;
}

export const Placeholder: React.FC<PlaceholderProps> = ({
  children,
  height,
}) => {
  return (
    <PlaceholderWrapper height={height}>
      <p>{children}</p>
    </PlaceholderWrapper>
  );
};

interface PlaceholderWrapperProps {
  height: number;
}

const PlaceholderWrapper = styled.div`
  height: ${({ height }: PlaceholderWrapperProps) => height}px;
  width: max-content;
`;
