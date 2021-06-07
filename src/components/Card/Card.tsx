import { AnimatePresence } from 'framer-motion';
import { useState, VFC } from 'react';

import { texts } from '../../constants/texts';
import { useAppStore } from '../../store/store';
import * as S from './Card.styles';
import { CardProps } from './Card.types';

export const Card: VFC<CardProps> = ({ data, setModal, setContent }) => {
  const [, { setDataTypeOnModal, setChosenDataFromApi }] = useAppStore();

  const [isHovered, setHovered] = useState(false);
  const { title, image } = data;

  const handleHover = (hoverState: boolean): void => {
    setHovered(hoverState);
  };

  const handleClick = () => {
    setChosenDataFromApi(null);
    setModal(true);
    setContent(data);
    setDataTypeOnModal(title);
  };

  return (
    <AnimatePresence exitBeforeEnter>
      <S.Wrapper
        onMouseEnter={() => handleHover(true)}
        onMouseLeave={() => handleHover(false)}
        onFocus={() => handleHover(true)}
        onBlur={() => handleHover(false)}
        onClick={() => handleClick()}
        onTouchEnd={() => handleClick()}
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
      </S.Wrapper>
    </AnimatePresence>
  );
};
