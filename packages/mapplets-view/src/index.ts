import { MappletsComponentSet } from '@mapples/mapplets-types';

import View from './components/View';
import ScrollView from './components/ScrollView';
import ImageView from './components/ImageView';

import { ViewComponentType } from './types';

const ViewComponent: MappletsComponentSet<ViewComponentType> = {
  View,
  ScrollView,
  ImageView,
};

export * from './types';
export { View, ScrollView, ImageView };

export default ViewComponent;
