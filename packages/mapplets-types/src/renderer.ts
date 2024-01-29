export interface MappletsComponentDescriptor<T> {
  id: string | 'root';
  props: object;
  type: T;
  parent: string;
  children: MappletsComponentDescriptor<T>[];
}
