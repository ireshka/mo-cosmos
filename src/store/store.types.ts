import { actions } from './store';

export type State = {
  isRocketAnimationInProgress: boolean;
};

export type Actions = typeof actions;
