/* eslint-disable react/jsx-props-no-spreading */
import { ReactElement } from 'react';
import { RenderModalBackdropProps } from 'react-overlays/Modal';

import { filteredCapsulesData } from '../../data/mock/capsules';
import { texts } from '../../data/texts';
import { useAppStore } from '../../store/store';
import { Table } from '../Table/Table';
import { CloseIcon } from './CloseButton/CloseButton';
import * as S from './Modal.styles';
import { ModalProps } from './Modal.types';

export const Modal = ({ show, onHide }: ModalProps): ReactElement | null => {
  const [{ dataTypeOnModal }] = useAppStore();
  const renderBackdrop = (props: RenderModalBackdropProps) => <S.Backdrop {...props} />;

  const modalTitle = dataTypeOnModal || texts.modal.noContent;

  return (
    <S.Wrapper show={show} onHide={onHide} renderBackdrop={renderBackdrop} restoreFocus={false}>
      <>
        <S.Header>
          <S.Title>{modalTitle}</S.Title>
          <CloseIcon closeHandler={onHide} />
        </S.Header>
        <Table data={filteredCapsulesData} />
      </>
    </S.Wrapper>
  );
};
