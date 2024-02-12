import React, { FC } from 'react';
import { View } from 'react-native';

import render from '@mapples/mapplets-renderer';

import useMapplesAPI from '../../hooks/useMapplesAPI';
import { MappletConfig } from '../../types';

import styles from './styles';

const MappletScreen: FC<MappletConfig> = ({ id }) => {
  const { dom } = useMapplesAPI(id);

  return <View style={styles.container}>{dom && render(dom)}</View>;
};

export default MappletScreen;
