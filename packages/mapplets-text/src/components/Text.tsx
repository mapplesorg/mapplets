import React, { forwardRef } from 'react';
import { Text as RNText } from 'react-native';

import { TextProps } from '../types';

const Text = forwardRef<RNText, TextProps>(({ text, ...props }, ref) => {
  return (
    <RNText ref={ref} {...props}>
      {text}
    </RNText>
  );
});

export default Text;
