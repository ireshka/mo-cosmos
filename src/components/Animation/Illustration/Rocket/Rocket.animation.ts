import { Variants } from 'framer-motion';

import { AnimationOption } from '../../../../types/framer';

const rocketAnimationDuration = 1;

const rocketVariants: Variants = {
  visible: {
    opacity: 1,
    y: '0%',
    transition: {
      duration: 0,
    },
  },
  hidden: {
    opacity: 0,
    y: '-300%',
    transition: {
      duration: rocketAnimationDuration,
    },
  },
};

export const getRocketAnimationOptions = (): AnimationOption => ({
  initial: 'visible',
  variants: rocketVariants,
});
