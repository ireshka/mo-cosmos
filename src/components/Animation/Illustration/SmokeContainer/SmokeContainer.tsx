/* eslint-disable react/jsx-props-no-spreading */
import { VFC } from 'react';

import LeftSmoke from '../../../../assets/rocket/smoke-left.svg';
import RightSmoke from '../../../../assets/rocket/smoke-right.svg';
import { useAppStore } from '../../../../store/store';
import { getLeftSmokeAnimationOptions, getRightSmokeAnimationOptions } from './Smoke.animation';
import * as S from './SmokeContainer.styles';

export const SmokeContainer: VFC = () => {
  console.log(getLeftSmokeAnimationOptions());
  const [{ isRocketAnimationInProgress }] = useAppStore();

  return (
    <S.Container>
      <S.Image
        src={LeftSmoke}
        alt=""
        width="35.135%"
        {...getLeftSmokeAnimationOptions()}
        animate={isRocketAnimationInProgress ? 'hidden' : 'visible'}
      />
      <S.Image
        src={RightSmoke}
        alt=""
        width="28.108%"
        {...getRightSmokeAnimationOptions()}
        animate={isRocketAnimationInProgress ? 'hidden' : 'visible'}
      />
    </S.Container>
  );
};
