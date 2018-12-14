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

export const fontSizes = {
  lg: css`
    font-size: 1.6rem;
  `,
  md: css`
    font-size: 1.4rem;
  `,
  sm: css`
    font-size: 1.2rem;
  `,
  xs: css`
    font-size: 1rem;
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
