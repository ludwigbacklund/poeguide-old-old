import * as React from 'react';
import styled from 'styled-components';

import { fontSizes } from '../../../../utils/styling';
import { GetUnique_uniqueByName } from '../__generated__/GetUnique';

const UniqueWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
  border-radius: 8px;
  background-color: rgb(${props => props.theme.darkShades});
  color: rgb(${props => props.theme.lightShades});
  text-align: center;
`;

const Divider = styled.hr`
  flex: 1;
  width: 100%;
  border: 0;
  height: 1px;
  background-image: linear-gradient(
    to right,
    transparent,
    rgb(${props => props.theme.main}),
    transparent
  );
`;

const NameWrapper = styled.div`
  padding: 16px;
  border-radius: 8px 8px 0 0;
  background-color: rgb(${props => props.theme.darkAccent});
`;

const BodyWrapper = styled.div`
  padding: 16px;
`;

const Name = styled.h2`
  ${fontSizes.lg}
  margin: 0px;
`;

const Modifiers = styled.div`
  display: flex;
  flex-direction: column;
`;

const Modifier = styled.span`
  line-height: 20px;
`;

const FlavourText = styled.p`
  font-style: italic;
`;

const Icon = styled.img`
  object-fit: scale-down;
`;

interface IUniqueProps {
  data: GetUnique_uniqueByName;
}

const Unique: React.SFC<IUniqueProps> = ({ data }) => {
  const {
    name,
    baseType,
    iconUrl,
    levelRequirement,
    strRequirement,
    dexRequirement,
    intRequirement,
    flavourText,
    modifiers,
  } = data;

  const implicitModifiers = modifiers.nodes.filter(
    modifier => modifier.type === 'IMPLICIT',
  );
  const explicitModifiers = modifiers.nodes.filter(
    modifier => modifier.type === 'EXPLICIT',
  );
  const readableAttributeRequirements = [
    { label: 'Str', value: strRequirement },
    { label: 'Dex', value: dexRequirement },
    { label: 'Int', value: intRequirement },
  ]
    .filter(requirement => requirement.value > 0)
    .map(requirement => `${requirement.value} ${requirement.label}`)
    .join(', ');

  return (
    <UniqueWrapper>
      <NameWrapper>
        <Name>{name}</Name>
        <Name>{baseType}</Name>
      </NameWrapper>
      <BodyWrapper>
        <span>
          Requires Level {levelRequirement}
          {readableAttributeRequirements !== '' &&
            `, ${readableAttributeRequirements}`}
        </span>
        <Divider />
        {implicitModifiers.length > 0 && (
          <>
            <Modifiers>
              {implicitModifiers.map((modifier, i) => (
                <Modifier key={i}>{modifier.text}</Modifier>
              ))}
            </Modifiers>
            <Divider />
          </>
        )}
        <Modifiers>
          {explicitModifiers.map((modifier, i) => (
            <Modifier key={i}>{modifier.text}</Modifier>
          ))}
        </Modifiers>
        <Divider />
        <FlavourText>{flavourText.replace(/\|/gm, '\n')}</FlavourText>
        <Icon src={iconUrl} />
      </BodyWrapper>
    </UniqueWrapper>
  );
};

export default Unique;
