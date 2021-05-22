import {
  DisplayedSpaceXCapsules,
  DisplayedSpaceXCrew,
  DisplayedSpaceXRockets,
  DisplayedSpaceXStarlink,
} from '../../data/cards.types';

export type TableData =
  | DisplayedSpaceXCapsules[]
  | DisplayedSpaceXCrew[]
  | DisplayedSpaceXRockets[]
  | DisplayedSpaceXStarlink[];

export type TableProps = {
  data: TableData;
};
