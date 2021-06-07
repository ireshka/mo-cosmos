/* eslint-disable unicorn/no-array-callback-reference */
/* eslint-disable no-param-reassign */
import produce, { Draft } from 'immer';
import { Action, createHook, createStore, defaults } from 'react-sweet-state';

import { ErrorRequestResponse, SpaceXTypes } from '../api/spaceX.types';
import { cardsData } from '../constants/cards';
import { CardsID } from '../constants/cards.types';
import { errorMessages } from '../constants/errorMessages';
import { isDefined } from '../utils/utils';
import { State } from './store.types';

defaults.devtools = true;
defaults.mutator = (currentState, producer) => produce(currentState, producer);

const initialState: State = {
  isRocketAnimationInProgress: false,
  isRocketAnimationEnded: true,
  dataTypeOnModal: null,
  chosenDataFromApi: null,
  errorMessage: null,
};

export const actions = {
  setErrorMessage:
    (value: string | null): Action<State> =>
    ({ setState }) => {
      setState((draft: Draft<State>) => {
        draft.errorMessage = value;
      });
    },
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
  setChosenDataFromApi:
    (value: SpaceXTypes | ErrorRequestResponse | null): Action<State> =>
    // eslint-disable-next-line unicorn/consistent-function-scoping
    ({ setState, getState, dispatch }) => {
      const state = getState();
      if (value === null) {
        setState((draft: Draft<State>) => {
          draft.chosenDataFromApi = null;
        });
        return;
      }
      const { dataTypeOnModal } = state;
      if (!dataTypeOnModal) return;
      const displayedCardData = cardsData.find((card) => card.title === dataTypeOnModal);
      if (!displayedCardData) return;

      const { headers, distinctProperty } = displayedCardData;

      if ('errorStatus' in value) {
        dispatch(actions.setErrorMessage(errorMessages.apiProblem));
        return;
      }
      const filteredResult = value.map((object: { [x: string]: unknown }) => {
        if (distinctProperty in object) {
          const objectEntries = [...headers, 'id'].map((header) => {
            if (header in object) {
              const objectValue = String(object[header]);
              return [header as string, objectValue] as const;
            }
            return null;
          });
          const filteredEntries = objectEntries.filter(isDefined);
          const filteredObject = Object.fromEntries(filteredEntries);
          return filteredObject;
        }
        return null;
      });

      const filteredResultsWithoutNull = filteredResult.filter(isDefined);
      setState((draft: Draft<State>) => {
        draft.chosenDataFromApi = filteredResultsWithoutNull;
      });
    },
};

const AppStore = createStore<State, typeof actions>({
  initialState,
  actions,
  name: 'app-store',
});

export const useAppStore = createHook(AppStore);
