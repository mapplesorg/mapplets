import React, { forwardRef } from 'react';

import { View } from '@mapples/mapplets-view';
import { Text } from '@mapples/mapplets-text';

import { CardHeaderProps, CardRef } from '../types';

const CardHeader = forwardRef<CardRef, CardHeaderProps>(
  ({ title, subtitle, styleSubtitle, styleTitle, ...props }, ref) => {
    return (
      <View ref={ref} {...props}>
        {!!title && <Text text={title} style={styleTitle} />}
        {!!subtitle && <Text text={subtitle} style={styleSubtitle} />}
      </View>
    );
  }
);

export default CardHeader;
