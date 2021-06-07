import axios from 'axios';

import { instance } from './spaceX.instance';
import {
  ErrorRequestResponse,
  PayloadObject,
  QueryOptionsObject,
  SpaceXCapsules,
  SpaceXCrew,
  SpaceXRockets,
  SpaceXStarlink,
  SpaceXStarlinkQuery,
  UserQueryOptionsObject,
} from './spaceX.types';

const defaultQueryOptionsObject: QueryOptionsObject = {
  resultLimit: 100,
};

const endpoints = {
  capsules: 'capsules',
  crew: 'crew',
  rockets: 'rockets',
  starlink: 'starlink',
};

const getErrorObject = (error: unknown): ErrorRequestResponse => {
  if (axios.isAxiosError(error)) {
    if (error.response) {
      const { status }: { status: number } = error.response;
      return { errorStatus: status };
    }
    return { errorStatus: 500 };
  }
  return { errorStatus: 500 };
};

const getPayloadObject = (userQueryOptionsObject: UserQueryOptionsObject): PayloadObject => {
  const fullQueryOptionsObject = {
    ...defaultQueryOptionsObject,
    ...userQueryOptionsObject,
  };
  const { resultLimit } = fullQueryOptionsObject;
  return {
    options: {
      limit: resultLimit,
    },
  };
};

export const api = {
  async getCapsules(): Promise<SpaceXCapsules[] | ErrorRequestResponse> {
    try {
      const response = await instance.get<SpaceXCapsules[]>(endpoints.capsules);
      const { data } = response;
      return data;
    } catch (error) {
      return getErrorObject(error);
    }
  },
  async getCrew(): Promise<SpaceXCrew[] | ErrorRequestResponse> {
    try {
      const response = await instance.get<SpaceXCrew[]>(endpoints.crew);
      const { data } = response;
      return data;
    } catch (error) {
      return getErrorObject(error);
    }
  },
  async getRockets(): Promise<SpaceXRockets[] | ErrorRequestResponse> {
    try {
      const response = await instance.get<SpaceXRockets[]>(endpoints.rockets);
      const { data } = response;
      return data;
    } catch (error) {
      return getErrorObject(error);
    }
  },
  async getStarlink(
    userQueryOptionsObject: UserQueryOptionsObject = {},
  ): Promise<SpaceXStarlink[] | ErrorRequestResponse> {
    try {
      const payload = getPayloadObject(userQueryOptionsObject);
      const endpoint = `${endpoints.starlink}/query`;
      const response = await instance.post<SpaceXStarlinkQuery>(endpoint, payload);
      const {
        data: { docs },
      } = response;
      const mappedDocuments = docs.map((starlink) => {
        const { spaceTrack, ...rest } = starlink;
        return {
          ...spaceTrack,
          ...rest,
          spaceTrack: true,
        };
      });
      return mappedDocuments;
    } catch (error) {
      return getErrorObject(error);
    }
  },
};
