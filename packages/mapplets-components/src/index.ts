import ButtonComponent from '@mapples/mapplets-button';
import CardComponent from '@mapples/mapplets-card';
import TextComponent from '@mapples/mapplets-text';
import ViewComponent from '@mapples/mapplets-view';
import { merge } from 'lodash';

const RenderComponentSet = merge(
  ButtonComponent,
  CardComponent,
  TextComponent,
  ViewComponent
);

export * from '@mapples/mapplets-button';
export * from '@mapples/mapplets-card';
export * from '@mapples/mapplets-text';
export * from '@mapples/mapplets-view';

export * from './types';

export { ButtonComponent, CardComponent, TextComponent, ViewComponent };
export default RenderComponentSet;
