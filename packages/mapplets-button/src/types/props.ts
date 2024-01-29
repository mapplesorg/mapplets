import { StyleProp, TextStyle, TouchableOpacityProps } from 'react-native';

export interface ButtonProps extends Omit<TouchableOpacityProps, 'children'> {
  text?: string;
  styleText?: StyleProp<TextStyle>;
}
