import styled from 'styled-components';

import { screenReadersOnly } from '../../theme/cssHelpers';

export const Wrapper = styled('div')`
  display: grid;
  gap: ${({ theme }) =>
    `${theme.dimension.layout.cardsGrid.rowGap} ${theme.dimension.layout.cardsGrid.columnGap}`};
  grid-template-columns: 1fr 1fr;
  max-width: ${({ theme }) => theme.dimension.layout.cardsGrid.maxWidth};
`;

export const ListHeader = styled('h2')`
  ${screenReadersOnly}
`;
