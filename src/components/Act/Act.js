import React, { Fragment } from 'react';
import styled from 'styled-components';

import { Button, Badge } from 'antd';

const TitleHolder = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ActText = styled.h3`
  color: white;
  margin-bottom: 0;
  white-space: nowrap;
`;

const DarkButton = styled(Button)`
  border-color: rgba(255, 255, 255, 0.7);
  color: rgba(255, 255, 255, 0.7);
`;

const LeftTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const DotDivider = styled.span`
  color: rgba(255, 255, 255, 0.7);
  font-size: 8px;
  margin-left: 10px;
  margin-right: 10px;
`;

const AttributeRequirement = styled(Badge)`
  & .ant-badge-count {
    background: ${props => props.color};
    opacity: 0.7;
    margin-right: 10px;
    box-shadow: -1px 1px 2px 1px rgba(0, 0, 0, 0.14);
  }

  & .ant-badge-count:hover {
    cursor: default;
    opacity: 1;
  }
`;

const Act = ({
  number, isFirst, attributeRequirements, onClick, children,
}) => (
  <Fragment>
    <TitleHolder>
      <LeftTitle>
        <ActText>Act {number}</ActText>
        <DotDivider>&#9679;</DotDivider>
        <AttributeRequirement
          overflowCount={999}
          count={attributeRequirements.int}
          color="#40a9ff"
        />
        <AttributeRequirement
          overflowCount={999}
          count={attributeRequirements.str}
          color="#F44336"
        />
        <AttributeRequirement
          overflowCount={999}
          count={attributeRequirements.dex}
          color="#4CAF50"
        />
      </LeftTitle>

      {isFirst && (
        <DarkButton size="small" ghost onClick={() => onClick()}>
          Clear
        </DarkButton>
      )}
    </TitleHolder>
    {children}
  </Fragment>
);

export default Act;
