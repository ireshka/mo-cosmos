import { FC } from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from './theme/GlobalStyle';
import { myDefaultTheme } from './theme/myDefaultTheme';

export const App: FC = () => (
  <ThemeProvider theme={myDefaultTheme}>
    <GlobalStyle />
    <div>Hello SpaceX</div>
  </ThemeProvider>
);
