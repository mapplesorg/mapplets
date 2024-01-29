import { merge } from 'lodash';

import ButtonComponent from '@mapplesorg/mapplets-button';
import TextComponent from '@mapplesorg/mapplets-text';
import CardComponent from '@mapplesorg/mapplets-card';
import ViewComponent from '@mapplesorg/mapplets-view';

export const RendererComponentSet = merge(
  ButtonComponent,
  TextComponent,
  CardComponent,
  ViewComponent
);
