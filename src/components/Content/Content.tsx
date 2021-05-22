import { ReactElement, ReactNode } from 'react';

import * as S from './Content.styles';

type IContentProps = {
  children: ReactNode;
};

export const Content = ({ children }: IContentProps): ReactElement | null => (
  <S.Wrapper>{children}</S.Wrapper>
);
