import styled from 'styled-components';

// change semantic table tags for 'div' because I didn't find any
// custom scrollbar that works with table, sorry accessibility :(
export const Table = styled('div')`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  width: 100%;
`;

export const Header = styled('div')`
  border: none;
  border-radius: ${({ theme }) => theme.radius.extraSmall};
`;

export const HeaderRow = styled('div')`
  background-color: ${({ theme }) => theme.colors.modal.tableHeaderBackground};
  border-radius: ${({ theme }) => theme.radius.extraSmall};
  display: flex;
  width: 100%;
  /* grid-template-columns: 1fr 1fr; */
`;

export const HeaderCell = styled('div')`
  border-radius: ${({ theme }) => theme.radius.extraSmall};
  flex-basis: 100%;
  font-size: ${({ theme }) => theme.typography.fontSize.small};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  line-height: ${({ theme }) => theme.typography.lineHeight.small};
  padding: 10px 16px;
  text-transform: capitalize;
  transition: background-color 0.5s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.modal.tableHeaderHoverBackground};
  }
`;

export const TableBody = styled('div')`
  display: flex;
  flex: 1;
  flex-direction: column;
  min-height: 0;
  overflow: auto;
`;

export const BodyRow = styled('div')`
  display: flex;
`;

export const BodyCell = styled('div')`
  color: ${({ theme }) => theme.colors.modal.tableElements};
  flex-basis: 100%;
  font-size: ${({ theme }) => theme.typography.fontSize.small};
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
  line-height: ${({ theme }) => theme.typography.lineHeight.small};
  padding: 14px 16px;
`;

export const Overlay = styled('div')`
  background: ${({ theme }) => theme.colors.gradients.modal.bottom};
  bottom: 0;
  height: 52px;
  left: 0;
  position: absolute;
  right: 0;
`;
