import axios from 'axios';

import { instance } from './spaceX.instance';
import {
  ErrorRequestResponse,
  SpaceXCapsules,
  SpaceXCrew,
  SpaceXRockets,
  SpaceXStarlink,
} from './spaceX.types';

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

export const api = {
  async getCapsules(): Promise<SpaceXCapsules | ErrorRequestResponse> {
    try {
      const response = await instance.get<SpaceXCapsules>(endpoints.capsules);
      const { data } = response;
      return data;
    } catch (error) {
      return await getErrorObject(error);
    }
  },
  async getCrew(): Promise<SpaceXCrew | ErrorRequestResponse> {
    try {
      const response = await instance.get<SpaceXCrew>(endpoints.crew);
      const { data } = response;
      return data;
    } catch (error) {
      return await getErrorObject(error);
    }
  },
  async getRockets(): Promise<SpaceXRockets | ErrorRequestResponse> {
    try {
      const response = await instance.get<SpaceXRockets>(endpoints.rockets);
      const { data } = response;
      return data;
    } catch (error) {
      return await getErrorObject(error);
    }
  },
  async getStarlink(): Promise<SpaceXStarlink | ErrorRequestResponse> {
    try {
      const response = await instance.get<SpaceXStarlink>(endpoints.starlink);
      const { data } = response;
      return data;
    } catch (error) {
      return await getErrorObject(error);
    }
  },
};
