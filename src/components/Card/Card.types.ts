import { Dispatch, SetStateAction } from 'react';

import { Card } from '../../constants/cards.types';

export type CardProps = {
  data: Card;
  setModal: Dispatch<SetStateAction<boolean>>;
  setContent: Dispatch<SetStateAction<Card | null>>;
  cardTagName?: keyof JSX.IntrinsicElements;
};
