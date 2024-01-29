import { MappletsComponentSet } from '@mapplesorg/mapplets-types';

import Text from './components/Text';

import { TextComponentType } from './types';

const TextComponent: MappletsComponentSet<TextComponentType> = {
  Text,
};

export * from './types';
export { Text };

export default TextComponent;
