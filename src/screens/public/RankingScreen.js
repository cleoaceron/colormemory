import React from 'react';
import {connect} from 'react-redux';
import {actionCreator} from 'ducks';
import PropTypes from 'prop-types';
import {View, Text, FlatList} from 'react-native';
import {Layout, ScrollContainer} from 'components';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Orientation from 'react-native-orientation-locker';

import styles from './style';

const RankingScreen = ({scores, ...props}) => {
  const [dataScores, setDataScores] = React.useState([]);

  React.useEffect(() => {
    Orientation.unlockAllOrientations();
    const getStorage = async () => {
      try {
        const value = await AsyncStorage.getItem('scores');
        const jsonValues = JSON.parse(value);

        handleRankings(jsonValues === null ? [] : jsonValues);
      } catch (e) {}
    };

    getStorage();
    return () => Orientation.lockToPortrait();
  }, [scores]);

  const handleRankings = items =>
    setDataScores(
      items.sort((a, b) => parseFloat(b.score) - parseFloat(a.score)),
    );

  const renderScores = (index, item) => (
    <View key={index + 1} style={styles.scoresContainer}>
      <Text style={[styles.fontStyle]}>{index + 1}</Text>
      <Text style={[styles.fontStyle]}>{item.name}</Text>
      <Text style={[styles.fontStyle]}>{item.score}</Text>
    </View>
  );

  return (
    <Layout>
      <View style={[styles.rankContainer]}>
        <View style={styles.scoresContainer}>
          <Text style={[styles.fontStyle, styles.label]}>Rank</Text>
          <Text style={[styles.fontStyle, styles.label]}>Name</Text>
          <Text style={[styles.fontStyle, styles.label]}>Score</Text>
        </View>
        <FlatList
          data={dataScores}
          renderItem={({item, index}) => renderScores(index, item)}
          numColumns={1}
          keyExtractor={(item, index) => index}
        />
      </View>
    </Layout>
  );
};

RankingScreen.propTypes = {
  scores: PropTypes.any,
};

const mapStateToProps = ({scores}) => ({scores});

export default connect(mapStateToProps, {actionCreator})(RankingScreen);
