import { Card } from '../../constants/cards.types';

export type ModalProps = {
  show: boolean;
  data: Card | null;
  onHide: () => void;
};
