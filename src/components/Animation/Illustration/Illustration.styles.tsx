import styled from 'styled-components';

export const Wrapper = styled('div')`
  position: relative;
`;

export const Image = styled('img')`
  max-width: ${({ theme }) => theme.dimension.animation.planet.maxWidth};
  width: 100%;
`;
