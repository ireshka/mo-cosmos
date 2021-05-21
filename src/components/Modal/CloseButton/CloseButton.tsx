import { VFC } from 'react';
import { useTheme } from 'styled-components';

import * as S from './CloseButton.styles';
import { CloseButtonProps } from './CloseButton.types';

export const CloseIcon: VFC<CloseButtonProps> = ({ closeHandler }) => {
  const theme = useTheme();
  const iconColor = theme.colors.modal.closeIcon;
  return (
    <S.Button onClick={() => closeHandler()}>
      <S.Icon fill={iconColor} />
    </S.Button>
  );
};
