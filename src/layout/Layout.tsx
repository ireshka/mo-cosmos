import { ReactElement, ReactNode } from 'react';

import * as S from './Layout.styles';

type ILayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: ILayoutProps): ReactElement | null => (
  <S.Container>{children}</S.Container>
);
