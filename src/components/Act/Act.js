import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

import { Button, Badge, Icon } from 'antd';

const TitleHolder = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ActText = styled.h3`
  color: white;
  margin-bottom: 0;
  user-select: none;
  white-space: nowrap;
  cursor: pointer;
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

const CollapseIcon = styled(Icon)`
  color: white;
  opacity: 0.7;
  margin-right: 10px;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;

class Act extends Component {
  state = { hidden: false };

  componentWillUpdate(nextProps) {
    const { newChildren } = nextProps;
    const { children } = this.props;
    const { hidden } = this.state;
    if (hidden && children !== newChildren) this.toggleHidden();
  }

  toggleHidden = () => {
    const { hidden } = this.state;
    this.setState({ hidden: !hidden });
  };

  render() {
    const { hidden } = this.state;
    const {
      number,
      isFirst,
      attributeRequirements,
      onClick,
      children,
    } = this.props;

    return (
      <Fragment>
        <TitleHolder>
          <LeftTitle>
            <CollapseIcon
              type={hidden ? 'plus-square-o' : 'minus-square-o'}
              onClick={() => this.toggleHidden()}
            />
            <ActText onClick={() => this.toggleHidden()}>Act {number}</ActText>
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
        {!hidden && children}
      </Fragment>
    );
  }
}
export default Act;
