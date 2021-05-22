import { VFC } from 'react';

import { texts } from '../../data/texts';
import * as S from './Footer.styles';

export const Footer: VFC = () => (
  <S.Wrapper>
    <S.Text>{texts.footer.note1}</S.Text>
    <S.Text>{texts.footer.note2}</S.Text>
  </S.Wrapper>
);
