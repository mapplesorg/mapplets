import { MappletsComponentSet } from '@mapples/mapplets-types';

import Image from './components/Image';
import LottieImage from './components/LottieImage';

import { MediaComponentType } from './types';

const MediaComponent: MappletsComponentSet<MediaComponentType> = {
  Image,
  LottieImage
};

export * from './types';
export { Image };

export default MediaComponent;
