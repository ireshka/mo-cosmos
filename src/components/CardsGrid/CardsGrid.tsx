import { FC, useState } from 'react';

import { cardsData } from '../../constants/cards';
import { Card as CardType } from '../../constants/cards.types';
import { useAppStore } from '../../store/store';
import { Card } from '../Card/Card';
import { Modal } from '../Modal/Modal';
import * as S from './CardsGrid.styles';

export const CardsGrid: FC = () => {
  const [, { setErrorMessage }] = useAppStore();
  const [isModalShow, setModalShow] = useState(false);
  const [modalContent, setModalContent] = useState<CardType | null>(null);

  const hideModal = () => {
    setModalShow(false);
    setErrorMessage(null);
  };

  return (
    <>
      <article>
        <S.ListHeader>Available data</S.ListHeader>
        <S.List>
          {cardsData.map((data) => (
            <Card
              key={data.id}
              data={data}
              setModal={setModalShow}
              setContent={setModalContent}
              cardTagName="li"
            />
          ))}
        </S.List>
        <Modal show={isModalShow} data={modalContent} onHide={hideModal} />
      </article>
    </>
  );
};
