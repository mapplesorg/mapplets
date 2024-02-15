import { MappletsComponentSet } from '@mapples/mapplets-types';

import Button from './components/Button';
import FAB from './components/FAB';
import ExtendedFAB from './components/ExtendedFAB';
import IconButton from './components/IconButton';

import { ButtonComponentType } from './types';

const ButtonComponent: MappletsComponentSet<ButtonComponentType> = {
  Button,
  FAB,
  ExtendedFAB,
  IconButton
};

export * from './types';
export { default as ButtonStyle } from './style';
export { Button };

export default ButtonComponent;
