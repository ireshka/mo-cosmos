import styled from 'styled-components';

import { screenReadersOnly } from '../../theme/cssHelpers';

export const Wrapper = styled('div')`
  display: flex;
  min-height: ${({ theme }) => theme.dimension.layout.footer.minHeight};
  padding: 2.25rem 1rem;
  position: relative;
`;

export const Logo = styled('img')<{ $width: number }>`
  width: ${({ $width }) => `${$width}px`};
`;

export const Header = styled('h1')`
  ${screenReadersOnly}
`;
