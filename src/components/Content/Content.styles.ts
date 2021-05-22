import styled from 'styled-components';

export const Wrapper = styled('div')`
  align-items: center;
  display: grid;
  grid-row-gap: 50px;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  justify-items: center;
`;
