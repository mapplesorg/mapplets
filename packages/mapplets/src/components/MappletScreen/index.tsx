import React, { FC } from 'react';
import { View } from 'react-native';

import styles from './styles';

import { Mapplet } from '../../types';

const MappletScreen: FC<Mapplet> = () => {
  return <View style={styles.container}></View>;
};

export default MappletScreen;
