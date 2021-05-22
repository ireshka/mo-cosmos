import { Transition, Variants } from 'framer-motion';

export type AnimationOption = {
  initial?: string;
  variants: Variants;
  transition?: Transition;
};
