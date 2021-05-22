/* eslint-disable react/jsx-props-no-spreading */
import { ReactElement, useEffect, useState } from 'react';
import { RenderModalBackdropProps } from 'react-overlays/Modal';

import { api } from '../../api/spaceX';
import { texts } from '../../data/texts';
import { useAppStore } from '../../store/store';
import { Table } from '../Table/Table';
import { CloseIcon } from './CloseButton/CloseButton';
import { ErrorBox } from './ErrorBox/ErrorBox';
import * as S from './Modal.styles';
import { ModalProps } from './Modal.types';

export const Modal = ({ show, onHide }: ModalProps): ReactElement | null => {
  const [isFetching, setIsFetching] = useState(false);
  const [{ dataTypeOnModal, chosenDataFromApi, errorMessage }, { setChosenDataFromApi }] =
    useAppStore();
  const renderBackdrop = (props: RenderModalBackdropProps) => <S.Backdrop {...props} />;

  const modalTitle = dataTypeOnModal || texts.modal.noContent;

  useEffect(() => {
    if (!dataTypeOnModal) return;
    setIsFetching(true);
    async function fetchData() {
      let response;
      switch (dataTypeOnModal) {
        case 'rockets':
          response = await api.getRockets();
          break;
        case 'capsules':
          response = await api.getCapsules();
          break;
        case 'starlink':
          response = await api.getStarlink();
          break;
        case 'crew':
          response = await api.getCrew();
          break;
        default:
      }
      if (response) {
        setChosenDataFromApi(response);
      }
      setIsFetching(false);
    }

    fetchData();
  }, [dataTypeOnModal, setChosenDataFromApi]);

  return (
    <S.Wrapper show={show} onHide={onHide} renderBackdrop={renderBackdrop} restoreFocus={false}>
      <>
        <S.Header>
          <S.Title>{modalTitle}</S.Title>
          <CloseIcon closeHandler={onHide} />
        </S.Header>
        <S.Content>
          {isFetching && !chosenDataFromApi && <div>Loading</div>}
          {!isFetching && chosenDataFromApi !== null && <Table data={chosenDataFromApi} />}
          {errorMessage && <ErrorBox text={errorMessage} />}
        </S.Content>
      </>
    </S.Wrapper>
  );
};
