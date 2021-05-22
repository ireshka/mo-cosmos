import { VFC } from 'react';

import * as S from './Spinner.styles';

export const Spinner: VFC = () => (
  <S.Wrapper animate="end">
    <S.Circle />
    <S.Circle />
    <S.Circle />
  </S.Wrapper>
);
