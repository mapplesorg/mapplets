import axios, { AxiosInstance } from 'axios';
import { PageApi } from './api/page';

class OpenApi {
  private axios: AxiosInstance = axios.create();

  Page = new PageApi(this.axios);

  init = (baseURL: string) => {
    this.axios = axios.create({
      baseURL
    })
    this.Page = new PageApi(this.axios)
  }
}

const MappletsOpenApi = new OpenApi();
export default MappletsOpenApi;
