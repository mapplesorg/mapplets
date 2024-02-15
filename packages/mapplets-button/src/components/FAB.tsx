import React, { forwardRef, PropsWithChildren } from 'react';
import { Pressable, View } from 'react-native';

import { ButtonProps } from '../types';

const FAB = forwardRef<View, PropsWithChildren<ButtonProps>>(
  ({ text, styleText, children, ...props }, ref) => {
    return (
      <Pressable ref={ref} {...props}>
        {children}
      </Pressable>
    );
  }
);

export default FAB;
