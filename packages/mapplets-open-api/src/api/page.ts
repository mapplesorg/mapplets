import { MappletsApiService } from '../base';
import { MappletsResponse } from '@mapples/mapplets-types';

export class PageApi extends MappletsApiService {
  getPage = <T>(id: string): Promise<MappletsResponse<T>> => {
    return this.axios.get(`/page/${id}`)
  }
}
