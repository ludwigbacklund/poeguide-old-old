import React, { Fragment } from 'react';
import styled from 'styled-components';

import Button from 'antd/lib/button';

const TitleHolder = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ActText = styled.h3`
  color: white;
  margin-bottom: 0;
`;

const DarkButton = styled(Button)`
  border-color: rgba(255, 255, 255, 0.7);
  color: rgba(255, 255, 255, 0.7);
`;

const Act = ({
  number, first, onClick, children,
}) => (
  <Fragment>
    <TitleHolder>
      <ActText>Act {number}</ActText>
      {first && (
        <DarkButton size="small" ghost onClick={() => onClick()}>
          Clear
        </DarkButton>
      )}
    </TitleHolder>
    {children}
  </Fragment>
);

export default Act;
