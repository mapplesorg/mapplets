import React, { forwardRef } from 'react';
import { ScrollView as RNScrollView } from 'react-native';

import { ViewProps, ViewRef } from '../types';

const HorizontalScrollView = forwardRef<ViewRef, ViewProps>(
  ({ children, ...props }, ref) => {
    return (
      <RNScrollView ref={ref} horizontal {...props}>
        {children}
      </RNScrollView>
    );
  }
);

export default HorizontalScrollView;
