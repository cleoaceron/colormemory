import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './style';

const Header = ({currentScore, navigation, ...props}) => {
  const handleNavigate = () => navigation.navigate('Rankings');
  //const handleNavigate = () => AsyncStorage.removeItem('scores');

  return (
    <>
      <View style={styles.headerStyle}>
        <Image
          source={require('../../../assets/icons/pantone.png')}
          resizeMode="center"
          style={styles.logo}
        />
        <Text style={styles.scoreStyle}>{currentScore}</Text>
        <TouchableOpacity
          onPress={() => handleNavigate()}
          style={styles.rankings}>
          <Text style={styles.scoreStyle}>High Score</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Header;
