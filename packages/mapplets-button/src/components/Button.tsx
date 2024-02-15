import React, { forwardRef } from 'react';
import { Pressable, View } from 'react-native';

import { Text } from '@mapples/mapplets-text';

import { ButtonProps } from '../types';

const Button = forwardRef<View, ButtonProps>(
  ({ text, styleText, ...props }, ref) => {
    return (
      <Pressable ref={ref} {...props}>
        <Text text={text} style={styleText} />
      </Pressable>
    );
  }
);

export default Button;
