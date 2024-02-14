import React, { forwardRef } from 'react';
import { ImageBackground } from 'react-native';

import { ImageViewProps, ViewRef } from '../types';

const ImageView = forwardRef<ViewRef, ImageViewProps>(
  ({ children, url, imageWidth, imageHeight, ...props }, ref) => {
    return (
      <ImageBackground source={{ uri: url, width: imageWidth, height: imageHeight }} ref={ref} {...props}>
        {children}
      </ImageBackground>
    );
  }
);

export default ImageView;
