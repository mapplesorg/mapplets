import { merge } from 'lodash';

import ButtonComponent from '@mapples/mapplets-button';
import TextComponent from '@mapples/mapplets-text';
import CardComponent from '@mapples/mapplets-card';
import ViewComponent from '@mapples/mapplets-view';
import MediaComponent from '@mapples/mapplets-media';

export const RendererComponentSet = merge(
  ButtonComponent,
  TextComponent,
  CardComponent,
  ViewComponent,
  MediaComponent
);
