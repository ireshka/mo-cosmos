import { useState, VFC } from 'react';

import { texts } from '../../data/texts';
import * as S from './Animation.styles';
import { Illustration } from './Illustration/Illustration';
import { LaunchButton } from './LaunchButton/LaunchButton';

export const Animation: VFC = () => (
  <S.Container>
    <Illustration />
    <LaunchButton text={texts.button.launch} />
  </S.Container>
);
