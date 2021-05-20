import styled from 'styled-components';

export const Container = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.dimension.layout.container.maxWidth};
  min-height: 100vh;
  padding: 0 1rem;
`;
