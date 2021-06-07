import { SpaceTrack, SpaceXCapsules, SpaceXCrew, SpaceXRockets } from '../api/spaceX.types';

export type CardsID = 'capsules' | 'crew' | 'rockets' | 'starlink';

export type DisplayedSpaceXCapsules = Pick<SpaceXCapsules, 'status' | 'type' | 'id'>;

export type CapsulesHeaders = keyof DisplayedSpaceXCapsules;

export type DisplayedSpaceXCrew = Pick<SpaceXCrew, 'name' | 'agency' | 'id'>;

export type CrewHeaders = keyof DisplayedSpaceXCrew;

export type DisplayedSpaceXRockets = Pick<SpaceXRockets, 'name' | 'active' | 'id'>;

export type RocketHeaders = keyof DisplayedSpaceXRockets;
export type DisplayedSpaceXStarlink = Pick<SpaceTrack, 'GP_ID' | 'LAUNCH_DATE' | 'OBJECT_NAME'>;

export type StarlinkHeaders = keyof DisplayedSpaceXStarlink;

export type Headers = StarlinkHeaders | CrewHeaders | RocketHeaders | CapsulesHeaders;

export type Card = {
  title: CardsID;
  image: string;
  id: string;
  headers: Headers[];
  distinctProperty: string;
};
