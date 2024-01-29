import React, { forwardRef } from 'react';
import { View as RNView } from 'react-native';

import { ViewProps, ViewRef } from '../types';

const View = forwardRef<ViewRef, ViewProps>(({ children, ...props }, ref) => {
  return (
    <RNView ref={ref} {...props}>
      {children}
    </RNView>
  );
});

export default View;
