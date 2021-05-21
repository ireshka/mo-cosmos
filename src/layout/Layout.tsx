import { ReactElement, ReactNode } from 'react';

import * as S from './Layout.styles';

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps): ReactElement | null => (
  <S.Container>{children}</S.Container>
);
