import styled from 'styled-components';

export const Container = styled('div')`
  align-items: flex-end;
  display: flex;
  justify-content: space-between;
  left: 23.2%;
  position: absolute;
  top: 2.688%;
  width: 50%;
`;

type ImageProps = {
  width: string;
};

export const Image = styled('img')<ImageProps>`
  width: ${({ width }) => width};
`;
