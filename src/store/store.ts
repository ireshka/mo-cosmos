/* eslint-disable no-param-reassign */
import produce, { Draft } from 'immer';
import { Action, createHook, createStore, defaults } from 'react-sweet-state';

import { CardsID } from '../data/cards.types';
import { State } from './store.types';

defaults.devtools = true;
defaults.mutator = (currentState, producer) => produce(currentState, producer);

const initialState: State = {
  isRocketAnimationInProgress: false,
  isRocketAnimationEnded: true,
  dataTypeOnModal: null,
};

export const actions = {
  setAnimationProgress:
    (value: boolean): Action<State> =>
    ({ setState }) => {
      setState((draft: Draft<State>) => {
        draft.isRocketAnimationInProgress = value;
      });
    },
  setAnimationEnd:
    (value: boolean): Action<State> =>
    ({ setState }) => {
      setState((draft: Draft<State>) => {
        draft.isRocketAnimationEnded = value;
      });
    },
  setDataTypeOnModal:
    (value: CardsID | null): Action<State> =>
    ({ setState }) => {
      setState((draft: Draft<State>) => {
        draft.dataTypeOnModal = value;
      });
    },
};

const AppStore = createStore<State, typeof actions>({
  initialState,
  actions,
  name: 'app-store',
});

export const useAppStore = createHook(AppStore);
