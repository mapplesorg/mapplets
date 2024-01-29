import React, { forwardRef } from 'react';
import { ScrollView as RNScrollView } from 'react-native';

import { ViewProps, ViewRef } from '../types';

const ScrollView = forwardRef<ViewRef, ViewProps>(
  ({ children, ...props }, ref) => {
    return (
      <RNScrollView ref={ref} {...props}>
        {children}
      </RNScrollView>
    );
  }
);

export default ScrollView;
