import { CardsID } from '../data/cards.types';

export type State = {
  isRocketAnimationInProgress: boolean;
  isRocketAnimationEnded: boolean;
  dataTypeOnModal: CardsID | null;
};
