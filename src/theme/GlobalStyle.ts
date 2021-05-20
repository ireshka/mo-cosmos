import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
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
    margin: 0;
    padding: 0;
  }
`;
