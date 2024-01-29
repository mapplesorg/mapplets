import { MappletsComponentSet } from '@mapples/mapplets-types';

import View from './components/View';
import ScrollView from './components/ScrollView';

import { ViewComponentType } from './types';

const ViewComponent: MappletsComponentSet<ViewComponentType> = {
  View,
  ScrollView,
};

export * from './types';
export { View, ScrollView };

export default ViewComponent;
