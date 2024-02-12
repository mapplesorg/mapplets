import { MappletsApiService } from '../base';
import { MappletsResponse } from '@mapples/mapplets-types';

export class PageApi extends MappletsApiService {
  getPage = async<T>(id: string): Promise<MappletsResponse<T>> => {
    try {
      const { data } = await this.axios.get(`/page/${id}`);
      return data;
    } catch (e) {
      throw new Error((e as Error).message);
    }
  }
}
