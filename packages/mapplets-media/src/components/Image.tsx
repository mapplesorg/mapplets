import React, { forwardRef } from 'react';
import { Image as RNImage } from 'react-native';

import { ImageProps } from '../types';

const Image = forwardRef<RNImage, ImageProps>(({ uri, imageWidth, imageHeight, ...props}, ref) => {
  return (
    <RNImage ref={ref} source={{ uri, width: imageWidth, height: imageHeight }} {...props} />
  )
})

export default Image;
