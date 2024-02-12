import { MappletsDOM } from './renderer';

export interface MappletsResponse<T> {
  name: string;
  created_at: string;
  updated_at: string;
  uuid: string;
  data: MappletsDOM<T>;
  project_uuid: string;
}
