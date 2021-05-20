import { VFC } from 'react';

import Logo from '../../assets/logo/logo.svg';
import * as S from './Header.styles';

export const Header: VFC = () => (
  <S.Container>
    <S.Logo alt="Usertive" src={Logo} $width={116} />
  </S.Container>
);
