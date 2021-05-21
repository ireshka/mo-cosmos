import { VFC } from 'react';

import { texts } from '../../data/texts';
import { useAppStore } from '../../store/store';
import * as S from './Animation.styles';
import { Illustration } from './Illustration/Illustration';
import { LaunchButton } from './LaunchButton/LaunchButton';

export const Animation: VFC = () => {
  const [{ isRocketAnimationInProgress }, { setAnimationProgress }] = useAppStore();

  const handleClick = () => setAnimationProgress(true);

  return (
    <S.Container>
      <Illustration />
      <LaunchButton
        text={texts.button.launch}
        disabled={isRocketAnimationInProgress}
        onClick={handleClick}
      />
    </S.Container>
  );
};
