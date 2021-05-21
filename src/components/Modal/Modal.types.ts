import { Card } from '../../data/cards.types';

export type ModalProps = {
  show: boolean;
  data: Card | null;
  onHide: () => void;
};
