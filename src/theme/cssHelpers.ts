import { css } from 'styled-components';

export const absoluteOverlay = css`
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
`;

export const flexCenter = css`
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const screenReadersOnly = css`
  height: 1;
  left: -100px;
  position: absolute;
  top: -100px;
  width: 1;
`;
