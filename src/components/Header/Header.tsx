import { VFC } from 'react';

import Logo from '../../assets/logo/logo.svg';
import * as S from './Header.styles';

export const Header: VFC = () => (
  <S.Wrapper>
    <S.Logo alt="Usertive" src={Logo} $width={116} />
  </S.Wrapper>
);
