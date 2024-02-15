import { TextComponentType } from '@mapples/mapplets-text';
import { ViewComponentType } from '@mapples/mapplets-view';
import { CardComponentType } from '@mapples/mapplets-card';
import { ButtonComponentType } from '@mapples/mapplets-button';
import { MediaComponentType } from '@mapples/mapplets-media';

export type RenderComponentType =
  | TextComponentType
  | ViewComponentType
  | CardComponentType
  | ButtonComponentType
  | MediaComponentType;
