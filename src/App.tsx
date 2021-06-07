import { FC } from 'react';
import { ThemeProvider } from 'styled-components';

import { Animation } from './components/Animation/Animation';
import { Background } from './components/Background/Background';
import { CardsGrid } from './components/CardsGrid/CardsGrid';
import { Content } from './components/Content/Content';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Layout } from './layout/Layout';
import { defaultTheme } from './theme/defaultTheme';
import { GlobalStyle } from './theme/GlobalStyle';

export const App: FC = () => (
  <ThemeProvider theme={defaultTheme}>
    <GlobalStyle />
    <Background />
    <Layout>
      <Header />
      <Content>
        <CardsGrid />
        <Animation />
      </Content>
      <Footer />
    </Layout>
  </ThemeProvider>
);
