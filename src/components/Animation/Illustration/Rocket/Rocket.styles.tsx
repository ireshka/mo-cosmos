import { motion } from 'framer-motion';
import styled from 'styled-components';

import { getRocketAnimationOptions } from './Rocket.animation';

export const Image = styled(motion.img).attrs(getRocketAnimationOptions)`
  left: 36%;
  position: absolute;
  top: -19.354%;
  width: 27.2%;
  opacity: 1;
  transform: translateY(0%);
`;
