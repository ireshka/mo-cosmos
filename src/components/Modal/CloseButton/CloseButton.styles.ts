import styled from 'styled-components';

import { ReactComponent as CloseSVG } from '../../../assets/icons/close.svg';
import { flexCenter } from '../../../theme/cssHelpers';

export const Icon = styled(CloseSVG)`
  color: ${({ theme }) => theme.colors.modal.closeIcon};
  cursor: pointer;
  height: 14px;
  width: 14px;
`;

export const Button = styled('button')`
  ${flexCenter}
  background: transparent;
  border: none;
  padding: 5px;
`;
