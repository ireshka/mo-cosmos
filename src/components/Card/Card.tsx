import { AnimatePresence } from 'framer-motion';
import { useState, VFC } from 'react';

import { texts } from '../../data/texts';
import * as S from './Card.styles';
import { CardProps } from './Card.types';

export const Card: VFC<CardProps> = ({ data }) => {
  const [isHovered, setHovered] = useState(false);

  const { title, image } = data;

  const handleHover = (hoverState: boolean): void => {
    if (hoverState) {
      setHovered(hoverState);
    } else {
      setHovered(hoverState);
    }
  };

  return (
    <AnimatePresence>
      <S.Container
        onMouseEnter={() => handleHover(true)}
        onMouseLeave={() => handleHover(false)}
        onFocus={() => handleHover(true)}
        onBlur={() => handleHover(false)}
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
          <S.OverlayText>{texts.card.overlayText}</S.OverlayText>
        </S.DetailsOverlay>
      </S.Container>
    </AnimatePresence>
  );
};
