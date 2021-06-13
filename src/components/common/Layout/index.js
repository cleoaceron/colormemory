import React from 'react';
import {View} from 'react-native';
import styles from './style';

const Layout = ({children, addStyle}) => {
  return <View style={[addStyle, styles.container]}>{children}</View>;
};

export default Layout;
