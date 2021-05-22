import { VFC } from 'react';

import sortedDown from '../../../assets/icons/down.svg';
import unsortedIcon from '../../../assets/icons/unsorted.svg';
import sortedUp from '../../../assets/icons/up.svg';
import * as S from './SortingButton.styles';
import { SortingButtonProps } from './SortingButton.types';

export const SortingButton: VFC<SortingButtonProps> = ({ sortState, isVisible }) => {
  const icon =
    // eslint-disable-next-line no-nested-ternary
    sortState === 'sorted-up' ? sortedUp : sortState === 'sorted-down' ? sortedDown : unsortedIcon;
  return (
    <S.Button isVisible={isVisible}>
      <S.Icon src={icon} alt="Sorting" />
    </S.Button>
  );
};
