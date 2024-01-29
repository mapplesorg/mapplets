import {
  ScrollView,
  ScrollViewProps,
  View,
  ViewProps as RNViewProps,
} from 'react-native';

export type ViewProps = RNViewProps & ScrollViewProps;
export type ViewRef = View & ScrollView;
