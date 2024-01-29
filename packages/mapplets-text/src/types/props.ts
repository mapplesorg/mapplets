import { TextProps as RNTextProps } from 'react-native';

export interface TextProps extends Omit<RNTextProps, 'children'> {
  text?: string | number | null;
}
