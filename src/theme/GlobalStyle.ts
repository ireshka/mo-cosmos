import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize};

  html {
    box-sizing: border-box;
    font-size: 100%;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    background-color: ${({ theme }) => theme.colors.pageBackground};
    color: ${({ theme }) => theme.colors.white};
    font-family: "Inter", Roboto, sans-serif;
    font-size: ${({ theme }) => theme.typography.fontSize.medium};
    font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
    margin: 0;
    padding: 0;
  }

  p, div, h1, h2, h3 {
    padding: 0;
    margin: 0;
  }

  .simplebar-scrollbar::before {
    background-color: ${({ theme }) => theme.colors.scrollbar.main};
  }
`;
