import styled from 'styled-components';

export const Button = styled('button')`
  background-color: ${({ theme }) => theme.colors.button.basic};
  border: none;
  border-radius: ${({ theme }) => theme.radius.small};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.typography.fontSize.medium};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  line-height: ${({ theme }) => theme.typography.lineHeight.medium};
  margin-top: 24px;
  padding: 12px 32px;
  transition: ${({ theme }) => `background-color ${theme.timing.short}s`};

  &:hover {
    background-color: ${({ theme }) => theme.colors.button.active};
  }
`;
