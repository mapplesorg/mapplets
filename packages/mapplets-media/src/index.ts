import { MappletsComponentSet } from '@mapples/mapplets-types';

import Image from './components/Image';

import { MediaComponentType } from './types';

const MediaComponent: MappletsComponentSet<MediaComponentType> = {
  Image,
};

export * from './types';
export { Image };

export default MediaComponent;
