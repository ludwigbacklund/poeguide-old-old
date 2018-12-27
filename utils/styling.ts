import { css } from 'styled-components';

interface IBreakpoints {
  [key: string]: number;
}

export const sizes: IBreakpoints = {
  lg: 1200,
  md: 992,
  sm: 768,
  xs: 576,
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
export const media = Object.keys(sizes).reduce((acc: any, label) => {
  acc[label] = (...args: [any]) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});
