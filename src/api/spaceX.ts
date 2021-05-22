import axios from 'axios';

import { instance } from './spaceX.instance';
import {
  ErrorRequestResponse,
  SpaceXCapsules,
  SpaceXCrew,
  SpaceXRockets,
  SpaceXStarlink,
  SpaceXStarlinkQuery,
} from './spaceX.types';

const DEFAULT_RESULT_API_LIMIT = 100;

const endpoints = {
  capsules: 'capsules',
  crew: 'crew',
  rockets: 'rockets',
  starlink: 'starlink',
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getErrorObject = async (error: any): Promise<ErrorRequestResponse> => {
  if (axios.isAxiosError(error)) {
    if (error.response) {
      const { status }: { status: number } = error.response;
      return { errorStatus: status };
    }
    return { errorStatus: 500 };
  }
  return { errorStatus: 500 };
};

const getStarlinkResultLimit = (resultLimit: number) => ({
  options: {
    limit: resultLimit,
  },
});

export const api = {
  async getCapsules(): Promise<SpaceXCapsules[] | ErrorRequestResponse> {
    try {
      const response = await instance.get<SpaceXCapsules[]>(endpoints.capsules);
      const { data } = response;
      return data;
    } catch (error) {
      return await getErrorObject(error);
    }
  },
  async getCrew(): Promise<SpaceXCrew[] | ErrorRequestResponse> {
    try {
      const response = await instance.get<SpaceXCrew[]>(endpoints.crew);
      const { data } = response;
      return data;
    } catch (error) {
      return await getErrorObject(error);
    }
  },
  async getRockets(): Promise<SpaceXRockets[] | ErrorRequestResponse> {
    try {
      const response = await instance.get<SpaceXRockets[]>(endpoints.rockets);
      const { data } = response;
      return data;
    } catch (error) {
      return await getErrorObject(error);
    }
  },
  async getStarlink(
    resultLimit = DEFAULT_RESULT_API_LIMIT,
  ): Promise<SpaceXStarlink[] | ErrorRequestResponse> {
    try {
      const payload = getStarlinkResultLimit(resultLimit);
      const endpoint = `${endpoints.starlink}/query`;
      const response = await instance.post<SpaceXStarlinkQuery>(endpoint, payload);
      const {
        data: { docs },
      } = response;
      return docs;
    } catch (error) {
      return await getErrorObject(error);
    }
  },
};
