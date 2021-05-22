import { cardsData } from '../../data/cards';
import { Headers } from '../../data/cards.types';
import { useAppStore } from '../../store/store';
import { TableData } from './Table.types';

type Header = {
  originalHeader: Headers;
  displayedHeader: string;
};
type UseTableReturn = {
  tableHeaders: Header[];
  tableContent: string[][];
};

export const useTable = (data: TableData): UseTableReturn => {
  const [{ dataTypeOnModal }] = useAppStore();
  const shownCard = cardsData.find((card) => card.title === dataTypeOnModal);
  const tableHeaders = shownCard ? shownCard.headers : [];
  const styledTableHeaders = tableHeaders.map((header) => {
    const regexp = /_/g;
    const displayedHeader = header.toLocaleLowerCase().replace(regexp, ' ');
    return {
      originalHeader: header,
      displayedHeader,
    };
  });

  // todo: correct typing
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dataForDisplay = data.map((element: any, index: number) => {
    const rowData = tableHeaders.map((header) => {
      const value: string = element[header] ? element[header].toString() : 'unknown data';
      return value;
    });

    const rowId = element.id ? element.id.toString() : `row-${index}`;

    const fullRowData = [rowId, ...rowData];

    return fullRowData;
  });

  return {
    tableHeaders: styledTableHeaders,
    tableContent: dataForDisplay,
  };
};
