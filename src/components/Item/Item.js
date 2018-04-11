import React, { PureComponent } from 'react';
import styled from 'styled-components';

import { Badge, Icon } from 'antd';

const ItemCard = styled.div`
  background-color: #424242;
  display: flex;
  margin-bottom: 10px;
  margin-top: 10px;
  box-shadow: -1px 1px 2px 1px rgba(0, 0, 0, 0.14);
  cursor: pointer;

  &:hover {
    box-shadow: -1px 1px 2px 1px
      rgba(
        ${props =>
    (props.onHoverColor === 'red' ? '244, 67, 54' : '64, 169, 255')},
        0.5
      );
  }

  @media (max-width: 756px) {
    font-size: 12px;
  }
`;

const CardLeft = styled.div`
  display: flex;
  flex: 6;
  margin: 15px 0px 15px 15px;
  flex-direction: column;
`;

const CardRight = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 15px 10px 15px 0px;
  justify-content: center;
`;

const LevelRequirement = styled.h4`
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
`;

const ItemName = styled.h3`
  color: white;
`;

const BlueBadge = styled(Badge)`
  flex: 1;
  & .ant-badge-dot {
    background: #40a9ff;
    box-shadow: none;
  }
`;

const WikiIcon = styled(Icon)`
  font-size: 18px;
`;

const WikiLink = styled.a`
  color: ${props => {
    const { primaryAttribute } = props;

    if (primaryAttribute === 'Strength') return '#F44336';
    else if (primaryAttribute === 'Intelligence') return '#40a9ff';
    else if (primaryAttribute === 'Dexterity') return '#4CAF50';
    return 'white';
  }};
  opacity: 0.4;
  transition: all 0.3s;
  text-align: center;
  margin-left: 10px;

  &:hover {
    color: white;
    opacity: 0.7;
  }
`;

// const AttributeRequirements = styled.div`
//   flex: 1;
//   display: flex;
//   font-size: 12px;
// `;

class Item extends PureComponent {
  render() {
    const {
      id,
      name,
      levelReq,
      // dexReq,
      // intReq,
      // strReq,
      primaryAttribute,
      chosen,
      onHoverColor,
      onClick,
    } = this.props;

    const wikiLink = `https://pathofexile.gamepedia.com/${name.replace(
      ' ',
      '_',
    )}`;

    return (
      <ItemCard onHoverColor={onHoverColor} onClick={() => onClick(id)}>
        <CardLeft>
          <BlueBadge offset={[-5, -5]} dot={chosen}>
            <ItemName>{name}</ItemName>{' '}
          </BlueBadge>
          {levelReq && (
            <LevelRequirement>{`Level: ${levelReq}`}</LevelRequirement>
          )}
        </CardLeft>

        <CardRight>
          <WikiLink
            href={wikiLink}
            target="_blank"
            primaryAttribute={primaryAttribute}
            onClick={e => e.stopPropagation()}
          >
            <WikiIcon type="info-circle" />
          </WikiLink>
        </CardRight>
      </ItemCard>
    );
  }
}

/* <AttributeRequirements>
  {[dexReq, intReq, strReq]
    .filter(req => req !== '' && req !== '0')
    .map((req, i) => <p key={i}>{i !== 0 ? ` / ${req}` : req}</p>)}
</AttributeRequirements> */

Item.defaultProps = {
  name: 'N/A',
  subheader: 'N/A',
  showWikiLink: false,
};

export default Item;
