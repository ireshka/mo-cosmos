import { ReactElement, ReactNode } from 'react';

import * as S from './Content.styles';

interface IContentProps {
  children: ReactNode;
}

export const Content = ({ children }: IContentProps): ReactElement | null => (
  <S.Container>{children}</S.Container>
);
