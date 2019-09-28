import gql from 'graphql-tag';
import * as React from 'react';
import styled from 'styled-components';
import { useGetUniqueQuery } from '../../graphql-types';

const CharacterWrapper = styled.div`
  grid-column: 2 / 3;
`;

export const Character: React.SFC<{}> = () => {
  const { data } = useGetUniqueQuery({ variables: { name: 'Shimmeron' } });

  return (
    <CharacterWrapper>
      {data && data.uniqueByName && data.uniqueByName.name}
    </CharacterWrapper>
  );
};

export const GET_UNIQUE = gql`
  query GetUnique($name: String!) {
    uniqueByName(name: $name) {
      name
      levelRequirement
    }
  }
`;
