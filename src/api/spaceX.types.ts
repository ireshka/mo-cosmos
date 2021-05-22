export type DragonType = 'unknown' | 'active' | 'retired' | 'destroyed';
export type CrewStatus = 'active' | 'inactive' | 'retired' | 'unknown';

export type SpaceXCapsules = {
  reuse_count: number;
  water_landings: number;
  land_landings: number;
  last_update: string;
  launches: string[];
  serial: string;
  status: DragonType;
  type: string;
  id: string;
};

export type SpaceXCrew = {
  name: string;
  agency: string;
  image: string;
  wikipedia: string;
  launches: string[];
  status: string;
  id: string;
};

type Height = {
  meters: number;
  feet: number;
};

type Diameter = {
  meters: number;
  feet: number;
};

type Mass = {
  kg: number;
  lb: number;
};

type ThrustSeaLevel = {
  kN: number;
  lbf: number;
};

type ThrustVacuum = {
  kN: number;
  lbf: number;
};

type FirstStage = {
  thrust_sea_level: ThrustSeaLevel;
  thrust_vacuum: ThrustVacuum;
  reusable: boolean;
  engines: number;
  fuel_amount_tons: number;
  burn_time_sec?: number;
};

type Thrust = {
  kN: number;
  lbf: number;
};

type Height2 = {
  meters?: number;
  feet?: number;
};

type Diameter2 = {
  meters?: number;
  feet?: number;
};

type CompositeFairing = {
  height: Height2;
  diameter: Diameter2;
};

type Payloads = {
  composite_fairing: CompositeFairing;
  option_1: string;
};

type SecondStage = {
  thrust: Thrust;
  payloads: Payloads;
  reusable: boolean;
  engines: number;
  fuel_amount_tons: number;
  burn_time_sec?: number;
};

type Isp = {
  sea_level: number;
  vacuum: number;
};

type ThrustSeaLevel2 = {
  kN: number;
  lbf: number;
};

type ThrustVacuum2 = {
  kN: number;
  lbf: number;
};

type Engines = {
  isp: Isp;
  thrust_sea_level: ThrustSeaLevel2;
  thrust_vacuum: ThrustVacuum2;
  number: number;
  type: string;
  version: string;
  layout: string;
  engine_loss_max?: number;
  propellant_1: string;
  propellant_2: string;
  thrust_to_weight: number;
};

type LandingLegs = {
  number: number;
  material: string;
};

type PayloadWeight = {
  id: string;
  name: string;
  kg: number;
  lb: number;
};

export type SpaceXRockets = {
  height: Height;
  diameter: Diameter;
  mass: Mass;
  first_stage: FirstStage;
  second_stage: SecondStage;
  engines: Engines;
  landing_legs: LandingLegs;
  payload_weights: PayloadWeight[];
  flickr_images: string[];
  name: string;
  type: string;
  active: boolean;
  stages: number;
  boosters: number;
  cost_per_launch: number;
  success_rate_pct: number;
  first_flight: string;
  country: string;
  company: string;
  wikipedia: string;
  description: string;
  id: string;
};

type SpaceTrack = {
  CCSDS_OMM_VERS: string;
  COMMENT: string;
  CREATION_DATE: Date;
  ORIGINATOR: string;
  OBJECT_NAME: string;
  OBJECT_ID: string;
  CENTER_NAME: string;
  REF_FRAME: string;
  TIME_SYSTEM: string;
  MEAN_ELEMENT_THEORY: string;
  EPOCH: Date;
  MEAN_MOTION: number;
  ECCENTRICITY: number;
  INCLINATION: number;
  RA_OF_ASC_NODE: number;
  ARG_OF_PERICENTER: number;
  MEAN_ANOMALY: number;
  EPHEMERIS_TYPE: number;
  CLASSIFICATION_TYPE: string;
  NORAD_CAT_ID: number;
  ELEMENT_SET_NO: number;
  REV_AT_EPOCH: number;
  BSTAR: number;
  MEAN_MOTION_DOT: number;
  MEAN_MOTION_DDOT: number;
  SEMIMAJOR_AXIS: number;
  PERIOD: number;
  APOAPSIS: number;
  PERIAPSIS: number;
  OBJECT_TYPE: string;
  RCS_SIZE: string;
  COUNTRY_CODE: string;
  LAUNCH_DATE: string;
  SITE: string;
  DECAY_DATE: string;
  DECAYED: number;
  FILE: number;
  GP_ID: number;
  TLE_LINE0: string;
  TLE_LINE1: string;
  TLE_LINE2: string;
};

export type SpaceXStarlink = {
  spaceTrack: SpaceTrack;
  version: string;
  launch: string;
  longitude?: number;
  latitude?: number;
  height_km?: number;
  velocity_kms?: number;
  id: string;
};

export type ErrorRequestResponse = {
  errorStatus: number;
};

export type SpaceXStarlinkQuery = {
  docs: SpaceXStarlink[];
  hasNextPage: boolean;
  hasPrevPage: false;
  limit: number;
  nextPage: number;
  offset: number;
  page: number;
  pagingCounter: number;
  prevPage: number;
  totalDocs: number;
  totalPages: number;
};
