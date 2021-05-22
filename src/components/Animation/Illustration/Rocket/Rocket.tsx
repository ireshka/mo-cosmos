import { VFC } from 'react';

import RocketImage1 from '../../../../assets/rocket/rocket-@1.png';
import RocketImage2 from '../../../../assets/rocket/rocket-@2.png';
import { useAppStore } from '../../../../store/store';
import * as S from './Rocket.styles';

export const Rocket: VFC = () => {
  const [{ isRocketAnimationInProgress }, { setAnimationProgress, setAnimationEnd }] =
    useAppStore();

  return (
    <S.Image
      alt=""
      srcSet={`${RocketImage1} 1x, ${RocketImage2} 2x`}
      animate={isRocketAnimationInProgress ? 'hidden' : 'visible'}
      onAnimationComplete={(definition) => {
        setAnimationProgress(false);
        if (definition === 'visible') {
          setAnimationEnd(true);
        }
      }}
    />
  );
};
