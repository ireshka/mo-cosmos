import { VFC } from 'react';

import { texts } from '../../constants/texts';
import { useAppStore } from '../../store/store';
import * as S from './Animation.styles';
import { Illustration } from './Illustration/Illustration';
import { LaunchButton } from './LaunchButton/LaunchButton';

export const Animation: VFC = () => {
  const [{ isRocketAnimationEnded }, { setAnimationProgress, setAnimationEnd }] = useAppStore();

  const handleClick = () => {
    setAnimationProgress(true);
    setAnimationEnd(false);
  };

  return (
    <S.Wrapper>
      <Illustration />
      <LaunchButton
        text={texts.button.launch}
        disabled={!isRocketAnimationEnded}
        onClick={handleClick}
      />
    </S.Wrapper>
  );
};
