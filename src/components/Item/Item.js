import React, { PureComponent } from 'react';
import styled from 'styled-components';

import { Badge, Icon } from 'antd';

const ItemCard = styled.div`
  background-color: #424242;
  display: flex;
  flex-direction: row;
  padding: 15px;
  margin-bottom: 10px;
  margin-top: 10px;
  box-shadow: -1px 1px 2px 1px rgba(0, 0, 0, 0.14);

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

const Description = styled.div`
  display: flex;
  justify-content: space-between;
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

const CardBottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const WikiIcon = styled(Icon)`
  margin-left: 10px;
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
        <BlueBadge offset={[-5, -5]} dot={chosen}>
          <ItemName>{name}</ItemName>

          <CardBottom>
            <Description>{`Lvel: ${levelReq}`}</Description>
            <WikiLink
              href={wikiLink}
              target="_blank"
              primaryAttribute={primaryAttribute}
              onClick={e => e.stopPropagation()}
            >
              <WikiIcon type="info-circle" />
            </WikiLink>
          </CardBottom>
        </BlueBadge>
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
