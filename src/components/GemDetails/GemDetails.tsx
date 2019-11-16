import * as React from 'react';
import styled from 'styled-components';

import { fontSizes, desktop } from '../../utils/styling';

interface GemDetailsProps {
  name: string;
  baseType?: string;
  iconUrl: string;
  levelRequirement: number;
  strRequirement: number;
  dexRequirement: number;
  intRequirement: number;
  description: string;
}

export const GemDetails: React.SFC<GemDetailsProps> = ({
  name,
  baseType,
  iconUrl,
  levelRequirement,
  strRequirement,
  dexRequirement,
  intRequirement,
  description,
}) => {
  const readableAttributeRequirements = [
    { label: 'Str', value: strRequirement },
    { label: 'Dex', value: dexRequirement },
    { label: 'Int', value: intRequirement },
  ]
    .filter(requirement => requirement.value && requirement.value > 0)
    .map(requirement => `${requirement.value} ${requirement.label}`)
    .join(', ');

  return (
    <GemDetailsWrapper>
      <NameWrapper>
        <Name>{name}</Name>
        {baseType && <Name>{baseType}</Name>}
      </NameWrapper>
      <BodyWrapper>
        <span>
          Requires Level {levelRequirement}
          {readableAttributeRequirements !== '' &&
            `, ${readableAttributeRequirements}`}
        </span>
        <Divider />
        <p>{description}</p>
        <Divider />
        {/* <Modifiers data-testid='explicit-modifiers'>
          {modifiers.map((modifier, i) =>
            modifier ? <Modifier key={i}>{modifier.text}</Modifier> : null,
          )}
        </Modifiers> */}
        <Divider />
        <Icon src={iconUrl} />
      </BodyWrapper>
    </GemDetailsWrapper>
  );
};

const GemDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  border-radius: 8px;
  background-color: rgb(${props => props.theme.darkShades});
  color: rgb(${props => props.theme.lightShades});
  text-align: center;

  @media (${desktop}) {
    width: 380px;
  }
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

// const Modifiers = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

// const Modifier = styled.span`
//   line-height: 20px;
// `;

const Icon = styled.img`
  object-fit: scale-down;
`;

// export const GET_GEM = gql`
//   query GetGem($name: String!) {
//     gemByName(name: $name) {
//       name
//       description
//       iconUrl
//       statText
//       qualityStatText
//       levelRequirement
//       strRequirement
//       dexRequirement
//       intRequirement
//     }
//   }
// `;
