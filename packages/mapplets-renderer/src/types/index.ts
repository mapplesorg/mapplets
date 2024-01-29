import { CardComponentType } from '@mapplesorg/mapplets-card';
import { ButtonComponentType } from '@mapplesorg/mapplets-button';
import { ViewComponentType } from '@mapplesorg/mapplets-view';
import { TextComponentType } from '@mapplesorg/mapplets-text';

export type RendererComponentType =
  | CardComponentType
  | ButtonComponentType
  | ViewComponentType
  | TextComponentType;
