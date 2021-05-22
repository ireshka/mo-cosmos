import { Modal as ReactModal } from 'react-overlays';
import styled from 'styled-components';

export const Wrapper = styled(ReactModal)`
  background-color: ${({ theme }) => theme.colors.modal.background};
  border-radius: ${({ theme }) => theme.radius.medium};
  display: flex;
  flex-direction: column;
  height: ${({ theme }) => theme.dimension.modal.height};
  left: 50%;
  max-width: ${({ theme }) => theme.dimension.modal.maxWidth};
  padding: 24px;
  position: fixed;
  top: 50%;
  transform: translate(-50%, -50%);
  width: ${({ theme }) => theme.dimension.modal.width};
`;

export const Backdrop = styled('div')`
  background-color: transparent;
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
`;

export const Header = styled('div')`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding-bottom: 1rem;
`;

export const Title = styled('h2')`
  font-size: ${({ theme }) => theme.typography.fontSize.large};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  line-height: ${({ theme }) => theme.typography.lineHeight.large};
  text-transform: capitalize;
`;
