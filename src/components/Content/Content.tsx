import { ReactElement } from 'react';

import * as S from './Content.styles';
import { IContentProps } from './Content.types';

export const Content = ({ children }: IContentProps): ReactElement | null => (
  <S.Wrapper>{children}</S.Wrapper>
);
