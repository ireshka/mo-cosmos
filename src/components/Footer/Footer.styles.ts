import styled from 'styled-components';

export const Wrapper = styled('footer')`
  align-items: flex-end;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  min-height: ${({ theme }) => theme.dimension.layout.footer.minHeight};
  padding: 1rem 1rem;

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
