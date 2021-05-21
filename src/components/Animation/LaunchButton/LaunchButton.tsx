import { VFC } from 'react';

import * as S from './LaunchButton.styles';
import { LaunchButtonProps } from './LaunchButton.types';

export const LaunchButton: VFC<LaunchButtonProps> = ({ text, disabled, onClick }) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <S.Button disabled={disabled} onClick={() => handleClick()}>
      <span>{text}</span>
    </S.Button>
  );
};
