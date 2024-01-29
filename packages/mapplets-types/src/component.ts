import { ComponentType } from 'react';

export type MappletsComponentSet<Key extends string> = Record<
  Key,
  ComponentType
>;
