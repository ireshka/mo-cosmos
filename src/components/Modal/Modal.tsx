/* eslint-disable react/jsx-props-no-spreading */
import { ReactElement } from 'react';
import { RenderModalBackdropProps } from 'react-overlays/Modal';

import { texts } from '../../data/texts';
import { CloseIcon } from './CloseButton/CloseButton';
import * as S from './Modal.styles';
import { ModalProps } from './Modal.types';

export const Modal = ({ show, data, onHide }: ModalProps): ReactElement | null => {
  const renderBackdrop = (props: RenderModalBackdropProps) => <S.Backdrop {...props} />;

  return (
    <S.Wrapper show={show} onHide={onHide} renderBackdrop={renderBackdrop} restoreFocus={false}>
      <S.Header>
        <S.Title>{data ? data.title : texts.modal.noContent}</S.Title>
        <CloseIcon closeHandler={onHide} />
      </S.Header>
    </S.Wrapper>
  );
};
