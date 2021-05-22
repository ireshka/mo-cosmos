/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useState, VFC } from 'react';
import SimpleBarReact from 'simplebar-react';

import { CompletedChosenDataFromApi } from '../../store/store.types';
import { HeaderCell } from './HeaderCell/HeaderCell';
import * as S from './Table.styles';
import { useTable } from './useTable';

type TableProps = {
  data: CompletedChosenDataFromApi;
};

export const Table: VFC<TableProps> = ({ data }) => {
  const { tableHeaders, tableContent } = useTable(data);
  const [sortedColumn, setSortedColumn] = useState<null | string>(null);

  return (
    <S.Table>
      <S.Header>
        <S.HeaderRow>
          {tableHeaders.map((header) => (
            <HeaderCell
              header={header}
              key={header.originalHeader}
              sortHandler={setSortedColumn}
              sortedColumn={sortedColumn}
            />
          ))}
        </S.HeaderRow>
      </S.Header>

      <S.TableBody>
        <SimpleBarReact style={{ maxHeight: '100%' }} autoHide={false}>
          {tableContent &&
            tableContent.map((fullRowData) => {
              const [id, ...rowData] = fullRowData;
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
      <S.Overlay />
    </S.Table>
  );
};
