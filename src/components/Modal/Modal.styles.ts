import { Modal as ReactModal } from 'react-overlays';
import styled from 'styled-components';

export const Container = styled(ReactModal)`
  background-color: white;
  color: black;
  left: 50%;
  min-height: 200px;
  position: fixed;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
`;

export const Backdrop = styled('div')`
  background-color: transparent;
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
`;
