import { ImageProps as RNImageProps } from 'react-native';
import { LottieViewProps } from 'lottie-react-native';

export type ImageProps = Omit<RNImageProps, 'source'> & {
  uri?: string;
  imageWidth?: number;
  imageHeight?: number;
}

export type LottieImageProps = Omit<LottieViewProps, 'source'> & {
  uri?: string;
}
