import { VFC } from 'react';

import LeftSmoke from '../../../../assets/rocket/smoke-left.svg';
import RightSmoke from '../../../../assets/rocket/smoke-right.svg';
import * as S from './SmokeContainer.styles';

export const SmokeContainer: VFC = () => (
  <S.Container>
    <S.Image src={LeftSmoke} alt="" width="35.135%" />
    <S.Image src={RightSmoke} alt="" width="28.108%" />
  </S.Container>
);
