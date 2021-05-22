import Div100vh from 'react-div-100vh';
import styled from 'styled-components';

export const Wrapper = styled(Div100vh)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.dimension.layout.wrapper.maxWidth};
  padding: 0 1rem;
`;
