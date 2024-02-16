import { CardComponentType } from '@mapples/mapplets-card';
import { ButtonComponentType } from '@mapples/mapplets-button';
import { ViewComponentType } from '@mapples/mapplets-view';
import { TextComponentType } from '@mapples/mapplets-text';
import { MediaComponentType } from '@mapples/mapplets-media';

export type RendererComponentType =
  | CardComponentType
  | ButtonComponentType
  | ViewComponentType
  | TextComponentType
  | MediaComponentType;
