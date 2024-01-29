import React, { forwardRef } from 'react';
import { TouchableOpacity } from 'react-native';

import { CardActionAreaRef, CardActionProps } from '../types';

const CardActionArea = forwardRef<CardActionAreaRef, CardActionProps>(
  ({ children, ...props }, ref) => {
    return (
      <TouchableOpacity ref={ref} {...props}>
        {children}
      </TouchableOpacity>
    );
  }
);

export default CardActionArea;
