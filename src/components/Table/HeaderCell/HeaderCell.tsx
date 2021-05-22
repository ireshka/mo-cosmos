import React, { MouseEvent, useState, VFC } from 'react';

import { SortingButton } from '../SortingButton/SortingButton';
import { Header } from '../useTable';
import * as S from './HeaderCell.styles';

type HeaderCellProps = {
  header: Header;
  sortHandler: React.Dispatch<React.SetStateAction<string | null>>;
  sortedColumn: string | null;
};

export const HeaderCell: VFC<HeaderCellProps> = ({ header, sortHandler, sortedColumn }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSorted, setIsSorted] = useState(false);

  const handleHover = (event: MouseEvent, state: boolean) => {
    const element = event.target as HTMLDivElement;
    const columnHeader = element.getAttribute('data-key');
    console.log(state);
    if (state) {
      setIsVisible(true);
      return;
    }
    if (isSorted && columnHeader === sortedColumn) return;
    setIsVisible(false);
  };

  const handleClick = (event: MouseEvent) => {
    const element = event.target as HTMLDivElement;
    const columnHeader = element.getAttribute('data-key');
    setIsSorted(true);
    sortHandler(columnHeader);
  };

  console.log(header);
  return (
    <S.Wrapper
      key={header.originalHeader}
      data-key={header.originalHeader}
      onMouseEnter={(event: MouseEvent<HTMLDivElement>) => handleHover(event, true)}
      onMouseLeave={(event: MouseEvent<HTMLDivElement>) => handleHover(event, false)}
      onClick={(event: MouseEvent<HTMLDivElement>) => handleClick(event)}
    >
      {header.displayedHeader}
      <SortingButton sortState="unsorted" isVisible={isVisible} />
    </S.Wrapper>
  );
};
