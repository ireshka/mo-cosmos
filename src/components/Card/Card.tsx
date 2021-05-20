import { VFC } from 'react';

import * as S from './Card.styles';
import { CardProps } from './Card.types';

export const Card: VFC<CardProps> = ({ data }) => {
  const { title, image } = data;

  return (
    <S.Container>
      <S.Image alt={title} src={image} />
    </S.Container>
  );
};
