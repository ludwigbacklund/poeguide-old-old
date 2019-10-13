import * as React from 'react';
import styled from 'styled-components';

import Link from 'next/link';
import { fontSizes, desktop } from '../../utils/styling';

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
  ${fontSizes.lg};

  @media (${desktop}) {
    text-decoration: none;
    cursor: pointer;
    ${fontSizes.xl}
    font-weight: bold;
    margin: 0 8px;
  }
`;

const BuildName = styled.h2`
  ${fontSizes.md};

  @media (${desktop}) {
    font-weight: normal;
    ${fontSizes.lg}
  }
`;

// interface IHeaderProps {}

export const Header: React.SFC<{}> = () => {
  return (
    <HeaderWrapper>
      <TopBar />
      <NavWrapper>
        <Link href='/'>
          <HomeLink>poe.guide</HomeLink>
        </Link>
        <BuildName>Blade Vortex Elementalist </BuildName>
      </NavWrapper>
    </HeaderWrapper>
  );
};
