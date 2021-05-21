import { AnimatePresence } from 'framer-motion';
import { useState, VFC } from 'react';

import { texts } from '../../data/texts';
import * as S from './Card.styles';
import { CardProps } from './Card.types';

export const Card: VFC<CardProps> = ({ data, setModal, setContent }) => {
  const [isHovered, setHovered] = useState(false);
  const { title, image } = data;

  const handleHover = (): void => {
    setHovered((previousState) => !previousState);
    console.log('Zmiana hover');
  };

  const handleClick = () => {
    setModal(true);
    setContent(data);
  };

  return (
    <AnimatePresence exitBeforeEnter>
      <S.Container
        onMouseEnter={() => handleHover()}
        onMouseLeave={() => handleHover()}
        onFocus={() => handleHover()}
        onBlur={() => handleHover()}
        onClick={() => handleClick()}
        tabIndex={0}
      >
        <S.Image alt="" src={image} $hoverState={isHovered} />
        {!isHovered && (
          <>
            <S.ImageOverlay />
          </>
        )}
        <S.Title animate={isHovered ? 'hidden' : 'visible'}>{title}</S.Title>

        <S.DetailsOverlay animate={isHovered ? 'visible' : 'hidden'}>
          <S.OverlayText animate={isHovered ? 'visible' : 'hidden'}>
            {texts.card.overlayText}
          </S.OverlayText>
        </S.DetailsOverlay>
      </S.Container>
    </AnimatePresence>
  );
};
