import { ImageProps as RNImageProps } from 'react-native';

export type ImageProps = Omit<RNImageProps, 'source'> & {
  uri?: string;
  imageWidth?: number;
  imageHeight?: number;
}
