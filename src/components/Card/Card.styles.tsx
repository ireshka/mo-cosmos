import { motion } from 'framer-motion';
import styled from 'styled-components';

import * as CSSHelper from '../../theme/cssHelpers';
import {
  overlayAnimationOptions,
  overlayTextAnimationOptions,
  titleAnimationOptions,
} from './Card.animation';

export const Container = styled('div')`
  background-clip: content-box;
  border-radius: ${({ theme }) => theme.radius.medium};
  cursor: pointer;
  overflow: hidden;
  position: relative;
`;

export const Image = styled('img')<{ $hoverState: boolean }>`
  border-radius: ${({ theme }) => theme.radius.medium};
  display: block;
  filter: ${({ $hoverState }) => (!$hoverState ? 'blur(0px)' : 'blur(4px)')};
  transition: ${({ theme }) => `filter ${theme.timing.short}s linear`};
  width: 100%;
`;

export const ImageOverlay = styled('div')`
  ${CSSHelper.absoluteOverlay};
  background: ${({ theme }) => theme.colors.gradients.card.partial};
  background-clip: content-box;
  border: 0;
`;

export const Title = styled(motion.h3).attrs(titleAnimationOptions)`
  bottom: 24px;
  font-size: ${({ theme }) => theme.typography.fontSize.small};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  left: 0;
  line-height: ${({ theme }) => theme.typography.lineHeight.small};
  position: absolute;
  right: 0;
  text-align: center;
  text-transform: capitalize;
`;

export const DetailsOverlay = styled(motion.div).attrs(overlayAnimationOptions)`
  ${CSSHelper.absoluteOverlay};
  ${CSSHelper.flexCenter}
  background: ${({ theme }) => theme.colors.gradients.card.full};
`;

export const OverlayText = styled(motion.span).attrs(overlayTextAnimationOptions)`
  font-size: ${({ theme }) => theme.typography.fontSize.small};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  line-height: ${({ theme }) => theme.typography.lineHeight.small};
`;
