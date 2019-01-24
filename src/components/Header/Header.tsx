import * as React from 'react';
import styled from 'styled-components';

import Link from 'next/link';
import { fontSizes, media } from '../../utils/styling';

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const TopBar = styled.hr`
  width: 100%;
  height: 4px;
  margin: 0;
  border: 0;
  background-color: #ea4c2b;
`;

const NavWrapper = styled.nav`
  display: flex;
  align-items: center;
`;

const HomeLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  ${fontSizes.xl}
  font-weight: bold;
  margin: 0 8px;

  ${media.sm`
    ${fontSizes.lg};
  `}
`;

const BuildName = styled.h2`
  font-weight: normal;
  ${fontSizes.lg}

  ${media.sm`
    ${fontSizes.md};
  `}
`;

// interface IHeaderProps {}

const Header: React.SFC<{}> = () => {
  return (
    <HeaderWrapper>
      <TopBar />
      <NavWrapper>
        <Link href="/">
          <HomeLink>poe.guide</HomeLink>
        </Link>
        <BuildName>Blade Vortex Elementalist </BuildName>
      </NavWrapper>
    </HeaderWrapper>
  );
};

export default Header;
