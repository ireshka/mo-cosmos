import SimpleBarReact from 'simplebar-react';

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
        <SimpleBarReact style={{ maxHeight: '100%' }} autoHide={false}>
          {tableContent.map((fullRowData) => {
            const [id, ...rowData] = fullRowData;
            console.log(rowData);
            return (
              <S.BodyRow key={id}>
                {rowData.map((cellData, index) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <S.BodyCell key={`${id}${cellData}${index}`}>{cellData}</S.BodyCell>
                ))}
              </S.BodyRow>
            );
          })}
        </SimpleBarReact>
      </S.TableBody>
    </S.Table>
  );
};
