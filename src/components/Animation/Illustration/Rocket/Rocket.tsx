import { VFC } from 'react';

import RocketImage from '../../../../assets/rocket/rocket.svg';
import { useAppStore } from '../../../../store/store';
import * as S from './Rocket.styles';

export const Rocket: VFC = () => {
  const [{ isRocketAnimationInProgress }, { setAnimationProgress }] = useAppStore();

  return (
    <S.Image
      alt=""
      src={RocketImage}
      animate={isRocketAnimationInProgress ? 'hidden' : 'visible'}
      onAnimationComplete={() => setAnimationProgress(false)}
    />
  );
};
