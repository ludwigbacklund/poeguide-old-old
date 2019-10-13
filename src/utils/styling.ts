import { css } from 'styled-components';

interface Breakpoints {
  [key: string]: number;
}

export const sizes: Breakpoints = {
  desktop: 768,
};

export const theme = {
  darkAccent: '195,77,73',
  darkShades: '40,39,51',
  lightAccent: '151,172,185',
  lightShades: '250,249,250',
  main: '234,76,43',
};

export const fontSizes = {
  lg: css`
    font-size: 1.2rem;
  `,
  md: css`
    font-size: 1rem;
  `,
  sm: css`
    font-size: 0.8rem;
  `,
  xl: css`
    font-size: 1.4rem;
  `,
  xs: css`
    font-size: 0.6rem;
  `,
};

// Iterate through the sizes and create a media template
export const desktop = `min-width: ${sizes.desktop / 16}em`;
