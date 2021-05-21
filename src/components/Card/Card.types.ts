import { Dispatch, SetStateAction } from 'react';

import { Card } from '../../data/cards.types';

export type CardProps = {
  data: Card;
  setModal: Dispatch<SetStateAction<boolean>>;
  setContent: Dispatch<SetStateAction<Card | null>>;
};
