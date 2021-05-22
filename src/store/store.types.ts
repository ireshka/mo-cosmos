import { CardsID } from '../data/cards.types';

export type CompletedChosenDataFromApi = Record<string, string>[];
export type ChosenDataFromApi = CompletedChosenDataFromApi | null;

export type State = {
  isRocketAnimationInProgress: boolean;
  isRocketAnimationEnded: boolean;
  dataTypeOnModal: CardsID | null;
  chosenDataFromApi: ChosenDataFromApi;
  errorMessage: string | null;
};
