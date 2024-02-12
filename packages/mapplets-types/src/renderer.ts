export interface MappletsDOM<T> {
  id: string | 'root';
  props: object;
  type: T;
  parent: string;
  children: MappletsDOM<T>[];
}
