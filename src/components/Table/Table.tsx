import * as S from './Table.styles';
import { TableProps } from './Table.types';
import { useTable } from './useTable';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const Table = ({ data }: TableProps) => {
  const { tableHeaders, tableContent } = useTable(data);

  return (
    <S.Table>
      <S.Header>
        <S.HeaderRow>
          {tableHeaders.map((header) => (
            <S.HeaderCell key={header.originalHeader}>{header.displayedHeader}</S.HeaderCell>
          ))}
        </S.HeaderRow>
      </S.Header>
      <S.TableBody>
        {tableContent.map((rowData) => (
          <S.BodyRow>
            {rowData.map((cellData) => (
              <S.BodyCell>{cellData}</S.BodyCell>
            ))}
          </S.BodyRow>
        ))}
      </S.TableBody>
    </S.Table>
  );
};
