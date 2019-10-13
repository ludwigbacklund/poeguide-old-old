import styled from 'styled-components';

export const CharacterWrapper = styled.div`
  display: flex;
  justify-content: center;
  max-width: 720px;
`;

export const CharacterGrid = styled.div`
  display: grid;
  grid-template-areas:
    'weaponOne weaponOne .       helmet helmet .       weaponTwo weaponTwo'
    'weaponOne weaponOne .       helmet helmet .       weaponTwo weaponTwo'
    'weaponOne weaponOne .       body   body   amulet  weaponTwo weaponTwo'
    'weaponOne weaponOne ringOne body   body   ringTwo weaponTwo weaponTwo'
    '.         gloves    gloves  body   body   boots   boots     .'
    '.         gloves    gloves  belt   belt   boots   boots     .';
  grid-template-columns: repeat(8, 10vw);
  grid-template-rows: repeat(6, 10vw);
`;

export const WeaponOne = styled.div`
  grid-area: weaponOne;
  margin-right: 8px;
`;

export const Helmet = styled.div`
  grid-area: helmet;
`;

export const WeaponTwo = styled.div`
  grid-area: weaponTwo;
  margin-left: 8px;
`;

export const Body = styled.div`
  grid-area: body;
`;

export const Amulet = styled.div`
  grid-area: amulet;
`;

export const RingOne = styled.div`
  grid-area: ringOne;
`;

export const RingTwo = styled.div`
  grid-area: ringTwo;
`;

export const Gloves = styled.div`
  grid-area: gloves;
`;

export const Belt = styled.div`
  grid-area: belt;
`;

export const Boots = styled.div`
  grid-area: boots;
`;
