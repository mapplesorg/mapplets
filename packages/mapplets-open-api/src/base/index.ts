import { AxiosInstance } from 'axios';

export class MappletsApiService {
  protected axios: AxiosInstance;

  constructor(axios: AxiosInstance) {
    this.axios = axios;
  }
}
