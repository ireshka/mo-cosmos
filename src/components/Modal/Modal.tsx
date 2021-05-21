/* eslint-disable react/jsx-props-no-spreading */
import { ReactElement } from 'react';
import { RenderModalBackdropProps } from 'react-overlays/Modal';

import { Card } from '../../data/cards.types';
import * as S from './Modal.styles';

type ModalProps = {
  show: boolean;
  data: Card | null;
  onHide: () => void;
};

export const Modal = ({ show, data, onHide }: ModalProps): ReactElement | null => {
  const renderBackdrop = (props: RenderModalBackdropProps) => <S.Backdrop {...props} />;

  return (
    <S.Container show={show} onHide={onHide} renderBackdrop={renderBackdrop} restoreFocus={false}>
      {data ? <div>{data.title}</div> : <div>No content, sorry</div>}
    </S.Container>
  );
};
