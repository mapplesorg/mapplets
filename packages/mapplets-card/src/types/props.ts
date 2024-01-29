import {
  StyleProp,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

import { ViewRef, ViewProps } from '@mapples/mapplets-view';

export type CardRef = ViewRef;
export type CardActionAreaRef = TouchableOpacity;

export type CardProps = ViewProps;
export type CardActionProps = TouchableOpacityProps;

export interface CardHeaderProps extends Omit<ViewProps, 'children'> {
  title?: string;
  subtitle?: string;
  styleTitle?: StyleProp<TextStyle>;
  styleSubtitle?: StyleProp<TextStyle>;
}
