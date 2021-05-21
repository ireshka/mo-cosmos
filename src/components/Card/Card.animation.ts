import { Variants } from 'framer-motion';

import { AnimationOption } from '../../types/framer';

const overlayAnimationDuration = 0.3;
const overlayTextAnimationDuration = 0.1;

const titleAnimationVariants: Variants = {
  visible: {
    opacity: 1,
    transition: {
      duration: overlayTextAnimationDuration / 2,
      delay: overlayAnimationDuration + overlayTextAnimationDuration,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      duration: overlayTextAnimationDuration,
    },
  },
};

export const titleAnimationOptions = (): AnimationOption => ({
  initial: 'visible',
  variants: titleAnimationVariants,
});

const overlayAnimationVariants: Variants = {
  visible: {
    y: '0%',
    transition: {
      duration: overlayAnimationDuration,
      when: 'beforeChildren',
    },
  },
  hidden: {
    y: '103%',
    transition: {
      duration: overlayAnimationDuration,
      when: 'afterChildren',
    },
  },
};

export const overlayAnimationOptions = (): AnimationOption => ({
  initial: 'hidden',
  variants: overlayAnimationVariants,
});

const overlayTextAnimationVariants: Variants = {
  visible: {
    opacity: 1,
    transition: {
      duration: overlayTextAnimationDuration,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      duration: overlayTextAnimationDuration,
    },
  },
};

export const overlayTextAnimationOptions = (): AnimationOption => ({
  variants: overlayTextAnimationVariants,
});
