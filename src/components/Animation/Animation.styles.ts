import styled from 'styled-components';

import { screenReadersOnly } from '../../theme/cssHelpers';

export const Wrapper = styled('article')`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

export const ListHeader = styled('h2')`
  ${screenReadersOnly}
`;
