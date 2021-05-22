import { cardsData } from '../../data/cards';
import { Headers } from '../../data/cards.types';
import { useAppStore } from '../../store/store';
import { CompletedChosenDataFromApi } from '../../store/store.types';

type Header = {
  originalHeader: Headers;
  displayedHeader: string;
};
type UseTableReturn = {
  tableHeaders: Header[];
  tableContent: string[][] | null;
};

export const useTable = (data: CompletedChosenDataFromApi): UseTableReturn => {
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

  const dataForDisplay = data.map((element, index: number) => {
    const rowData = tableHeaders.map((header) => {
      const value = element[header] ? element[header] : 'unknown data';
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
