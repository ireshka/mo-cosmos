import { FC } from 'react';
import { ThemeProvider } from 'styled-components';

import { CardsGrid } from './components/CardsGrid/CardsGrid';
import { Content } from './components/Content/Content';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Layout } from './layout/Layout';
import { GlobalStyle } from './theme/GlobalStyle';
import { myDefaultTheme } from './theme/myDefaultTheme';

export const App: FC = () => (
  <ThemeProvider theme={myDefaultTheme}>
    <GlobalStyle />
    <Layout>
      <Header />
      <Content>
        <CardsGrid />
        <div>Rocket</div>
      </Content>
      <Footer />
    </Layout>
  </ThemeProvider>
);
