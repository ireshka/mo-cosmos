import { motion } from 'framer-motion';
import styled from 'styled-components';

import { getCircleAnimationOptions, getWrapperAnimationOptions } from './Spinner.animation';

export const Wrapper = styled(motion.div).attrs(getWrapperAnimationOptions)`
  display: flex;
  height: 6rem;
  justify-content: space-around;
  width: 8rem;
`;

export const Circle = styled(motion.span).attrs(getCircleAnimationOptions)`
  background-color: ${({ theme }) => theme.colors.spinner.secondColor};
  border-radius: 50%;
  display: block;
  height: 2rem;
  width: 2rem;
`;
