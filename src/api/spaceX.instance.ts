import axios_ from 'axios';

import { apiUrl } from '../data/apiUrl';

export const instance = axios_.create({
  baseURL: apiUrl,
});
