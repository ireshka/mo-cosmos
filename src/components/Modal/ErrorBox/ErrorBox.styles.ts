import styled from 'styled-components';

import { flexCenter } from '../../../theme/cssHelpers';

export const Wrapper = styled('div')`
  ${flexCenter};
  border: 10px solid ${({ theme }) => theme.colors.modal.errorBoxBorder};
  border-radius: ${({ theme }) => theme.radius.medium};
  color: ${({ theme }) => theme.colors.modal.tableElements};
  padding: 2rem 1rem;
  width: 80%;
`;
