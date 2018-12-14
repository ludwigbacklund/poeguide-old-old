import * as React from 'react';
import styled from 'styled-components';

import Link from 'next/link';
import { fontSizes, media } from '../../../utils/styling';

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  min-height: 64px;
  width: 100%;
  margin-bottom: 20px;
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
  font-size: 36px;
  font-weight: bold;
  margin: 0 8px;

  ${media.sm`
    ${fontSizes.sm};
  `}
`;

const BuildName = styled.h2`
  ${fontSizes.xs}
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
