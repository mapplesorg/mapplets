import React, { forwardRef } from 'react';

import { View } from '@mapples/mapplets-view';

import { CardProps, CardRef } from '../types';

const CardContent = forwardRef<CardRef, CardProps>(
  ({ children, ...props }, ref) => {
    return (
      <View ref={ref} {...props}>
        {children}
      </View>
    );
  }
);

export default CardContent;
