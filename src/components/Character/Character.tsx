import gql from 'graphql-tag';
import * as React from 'react';

// import {
//   CharacterWrapper,
//   CharacterGrid,
//   WeaponOne,
//   Helmet,
//   WeaponTwo,
//   Body,
//   Amulet,
//   RingOne,
//   RingTwo,
//   Gloves,
//   Belt,
//   Boots,
// } from './styled';

export const Character: React.SFC<{}> = () => {
  return null;
  // const { loading, data, error } = useQuery<GetBuild, GetBuildVariables>(
  //   GET_BUILD,
  //   {
  //     variables: { id: 1 },
  //   },
  // );
  // if (!data || !data.buildById) return <p>No data</p>;
  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error :(</p>;

  // const { nodes: uniques } = data.buildById.buildUniques;
  // const realUniques = uniques.filter(unique => unique !== null);
  // if (realUniques) {
  //   realUniques.map(uniq => uniq);
  // }
  // return (
  //   <CharacterWrapper>
  //     <CharacterGrid>
  //       <WeaponOne>WeaponOne</WeaponOne>
  //       <Helmet>Helmet</Helmet>
  //       <WeaponTwo>Weapon two</WeaponTwo>
  //       <Body>Body</Body>
  //       <Amulet>Amulet</Amulet>
  //       <RingOne>Ring one</RingOne>
  //       <RingTwo>Ring two</RingTwo>
  //       <Gloves>Gloves</Gloves>
  //       <Belt>Belt</Belt>
  //       <Boots>Boots</Boots>
  //     </CharacterGrid>
  //   </CharacterWrapper>
  // );
};

export const BUILD_QUERY = gql`
  query Build($id: Int!) {
    buildById(id: $id) {
      buildUniques {
        nodes {
          unique {
            iconUrl
          }
        }
      }
    }
  }
`;
