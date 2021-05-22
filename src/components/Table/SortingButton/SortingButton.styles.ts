import styled from 'styled-components';

import { flexCenter } from '../../../theme/cssHelpers';

export const Icon = styled('img')`
  color: ${({ theme }) => theme.colors.modal.closeIcon};
  cursor: pointer;
  height: 14px;
  width: 14px;
`;

export const Button = styled('button')<{ isVisible: boolean }>`
  ${flexCenter}
  background: transparent;
  border: none;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  padding: 5px;
`;
