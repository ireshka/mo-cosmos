import { FC } from 'react';

import { cardsData } from '../../data/cards';
import { Card } from '../Card/Card';
import * as S from './CardsGrid.styles';

export const CardsGrid: FC = () => (
  <S.Container>
    {cardsData.map((data) => (
      <Card key={data.id} data={data} />
    ))}
  </S.Container>
);
