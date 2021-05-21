/* eslint-disable no-param-reassign */
import produce, { Draft } from 'immer';
import { Action, createHook, createStore, defaults } from 'react-sweet-state';

import { State } from './store.types';

defaults.devtools = true;
defaults.mutator = (currentState, producer) => produce(currentState, producer);

const initialState: State = {
  isRocketAnimationInProgress: false,
};

export const actions = {
  setAnimationProgress:
    (value: boolean): Action<State> =>
    ({ setState }) => {
      setState((draft: Draft<State>) => {
        draft.isRocketAnimationInProgress = value;
      });
    },
};

const AppStore = createStore<State, typeof actions>({
  initialState,
  actions,
  name: 'app-store',
});

export const useAppStore = createHook(AppStore);
