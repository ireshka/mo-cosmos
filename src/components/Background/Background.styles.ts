import styled from 'styled-components';

import { CirclePosition, DotData } from './Background.types';

export const Wrapper = styled('div')`
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
`;

export const Circle = styled('img')<{ position: CirclePosition }>`
  bottom: ${({ position: { bottom } }) => bottom};
  height: ${({ position: { height } }) => height};
  left: ${({ position: { left } }) => left};
  position: absolute;
  right: ${({ position: { right } }) => right};
  top: ${({ position: { top } }) => top};
  width: ${({ position: { width } }) => width};
`;

export const Dot = styled('span')<{ data: DotData }>`
  background-color: ${({ data: { color } }) => color};
  border-radius: 50%;
  bottom: ${({ data: { bottom } }) => bottom};
  display: block;
  height: 8px;
  left: ${({ data: { left } }) => left};
  position: absolute;
  right: ${({ data: { right } }) => right};
  top: ${({ data: { top } }) => top};
  width: 8px;
`;
