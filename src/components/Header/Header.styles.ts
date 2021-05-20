import styled from 'styled-components';

export const Container = styled('div')`
  display: flex;
  padding: 2.25rem 0;
`;

export const Logo = styled('img')<{ $width: number }>`
  width: ${({ $width }) => `${$width}px`};
`;
