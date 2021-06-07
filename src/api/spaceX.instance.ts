import axios from 'axios';

import { apiUrl } from '../constants/apiUrl';

export const instance = axios.create({
  baseURL: apiUrl,
});
