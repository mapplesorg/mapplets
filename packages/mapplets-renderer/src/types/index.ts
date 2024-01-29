import { CardComponentType } from '@mapples/mapplets-card';
import { ButtonComponentType } from '@mapples/mapplets-button';
import { ViewComponentType } from '@mapples/mapplets-view';
import { TextComponentType } from '@mapples/mapplets-text';

export type RendererComponentType =
  | CardComponentType
  | ButtonComponentType
  | ViewComponentType
  | TextComponentType;
