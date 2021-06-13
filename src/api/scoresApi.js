import axios from 'axios';

export const X_DEVICE = 'Chrome 80.0.3987.116';
export const X_DEVICE_ID = '9bd650269509628a38772dba5d5dabd9';
export const X_OS = 'Mac OS 10.15.4';

import {BASE_URL as baseURL} from '@env';

const scoresApi = axios.create({
  baseURL,
  headers: {
    'X-DEVICE': 'Chrome 80.0.3987.116',
    'X-DEVICE-ID': '9bd650269509628a38772dba5d5dabd9',
    'X-OS': 'Mac OS 10.15.4',
    'Cache-Control': 'no-cache',
  },
  timeout: 50000,
});

export default scoresApi;
