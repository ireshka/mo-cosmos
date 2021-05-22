import styled from 'styled-components';

export const Wrapper = styled('div')`
  align-items: center;
  border-radius: ${({ theme }) => theme.radius.extraSmall};
  display: flex;
  flex-basis: 100%;
  font-size: ${({ theme }) => theme.typography.fontSize.small};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  justify-content: space-between;
  line-height: ${({ theme }) => theme.typography.lineHeight.small};
  padding: 10px 16px;
  text-transform: capitalize;
  transition: background-color 0.5s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.modal.tableHeaderHoverBackground};
  }
`;
