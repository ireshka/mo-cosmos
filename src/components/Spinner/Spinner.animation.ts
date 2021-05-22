/* eslint-disable unicorn/prefer-number-properties */
import { Transition, Variants } from 'framer-motion';

import { AnimationOption } from '../../types/framer';

const wrapperVariants: Variants = {
  end: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const circleTransition: Transition = {
  duration: 1,
  repeat: Infinity,
  repeatType: 'loop',
  ease: 'easeInOut',
};

const circleVariants: Variants = {
  end: {
    y: '-100%',
    backgroundColor: '#AF69AE',
    transition: {
      duration: 0.4,
      repeat: Infinity,
      repeatType: 'reverse',
      ease: 'easeInOut',
    },
  },
};

export const getWrapperAnimationOptions = (): AnimationOption => ({
  variants: wrapperVariants,
});

export const getCircleAnimationOptions = (): AnimationOption => ({
  variants: circleVariants,
  transition: circleTransition,
});
