import {
  ImageBackground,
  ScrollView,
  ScrollViewProps,
  View,
  ViewProps as RNViewProps
} from 'react-native';

export type ViewProps = RNViewProps & ScrollViewProps;
export type ImageViewProps = ViewProps & {
  url?: string;
  imageWidth?: number;
  imageHeight?: number;
};
export type ViewRef = View & ScrollView & ImageBackground;
