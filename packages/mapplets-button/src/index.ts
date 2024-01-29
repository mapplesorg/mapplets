import { MappletsComponentSet } from '@mapples/mapplets-types';

import Button from './components/Button';

import { ButtonComponentType } from './types';

const ButtonComponent: MappletsComponentSet<ButtonComponentType> = {
  Button,
};

export * from './types';
export { default as ButtonStyle } from './style';
export { Button };

export default ButtonComponent;
