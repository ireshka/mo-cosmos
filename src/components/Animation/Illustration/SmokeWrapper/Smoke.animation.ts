import { Variants } from 'framer-motion';

import { AnimationOption } from '../../../../types/framer';
import { rocketAnimationLandingDuration } from '../Rocket/Rocket.animation';

const smokeAnimationDuration = 0.2;

type DirectionType = 'left' | 'right';

const getRocketVariants = (direction: DirectionType): Variants => ({
  visible: {
    opacity: 1,
    y: '0%',
    x: '0%',
    transition: {
      duration: 0,
      delay: rocketAnimationLandingDuration,
    },
  },
  hidden: {
    opacity: 0,
    ...(direction === 'left' && {
      x: '-200%',
    }),
    ...(direction === 'right' && {
      x: '200%',
    }),
    y: '100%',
    transition: {
      duration: smokeAnimationDuration,
    },
  },
});

export const getLeftSmokeAnimationOptions = (): AnimationOption => ({
  initial: 'visible',
  variants: getRocketVariants('left'),
});

export const getRightSmokeAnimationOptions = (): AnimationOption => ({
  initial: 'visible',
  variants: getRocketVariants('right'),
});
