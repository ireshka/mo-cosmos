import styled from 'styled-components';

export const Wrapper = styled('div')`
  display: flex;
  min-height: ${({ theme }) => theme.dimension.layout.footer.minHeight};
  padding: 2.25rem 1rem;
`;

export const Logo = styled('img')<{ $width: number }>`
  width: ${({ $width }) => `${$width}px`};
`;
