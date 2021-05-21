import { VFC } from 'react';

import * as S from './LaunchButton.styles';
import { LaunchButtonProps } from './LaunchButton.types';

export const LaunchButton: VFC<LaunchButtonProps> = ({ text }) => (
  <S.Button>
    <span>{text}</span>
  </S.Button>
);
