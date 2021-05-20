import styled from 'styled-components';

export const Container = styled('div')`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 1rem 0;

  & > * {
    margin-right: 1rem;

    &:last-child {
      margin-right: 0;
    }
  }
`;

export const Text = styled('p')`
  color: ${({ theme }) => theme.colors.footer.text};
  font-size: ${({ theme }) => theme.typography.fontSize.extraSmall};
  line-height: ${({ theme }) => theme.typography.lineHeight.extraSmall};
  padding: 0.5rem 0;
`;
