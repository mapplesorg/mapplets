import React, { forwardRef } from 'react';
import LottieView from 'lottie-react-native';

import { LottieImageProps } from '../types';

const LottieImage = forwardRef<LottieView, LottieImageProps>(({ uri = '', ...props}, ref) => {
    return (
      <LottieView ref={ref} source={{ uri }} autoPlay loop {...props} />
    );
  }
)

export default LottieImage;
