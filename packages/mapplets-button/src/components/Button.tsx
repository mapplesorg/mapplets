import React, { forwardRef } from 'react';
import { TouchableOpacity } from 'react-native';

import { Text } from '@mapples/mapplets-text';

import { ButtonProps } from '../types';

const Button = forwardRef<TouchableOpacity, ButtonProps>(
  ({ text, styleText, ...props }) => {
    return (
      <TouchableOpacity {...props}>
        <Text text={text} style={styleText} />
      </TouchableOpacity>
    );
  }
);

export default Button;
