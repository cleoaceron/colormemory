/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {connect} from 'react-redux';
import {actionCreator, types} from 'ducks';
import {View, FlatList, Platform} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Orientation from 'react-native-orientation-locker';

import {
  Layout,
  ScrollContainer,
  ColorCard,
  Header,
  GameModal,
} from 'components';

import styles from './style';
import data from './data';

const HomeScreen = ({scores, ...props}) => {
  const [dataSources, setDataSources] = React.useState({});
  const [turns, setTurns] = React.useState(0);
  const [freeze, setFreeze] = React.useState(false);
  const [selectedColors, setSelectedColors] = React.useState([]);
  const [currentScore, setCurrentScore] = React.useState(0);
  const [pairedColors, setPairedColors] = React.useState([]);
  const [notPairedFlag, setNotPairedFlag] = React.useState(false);
  const [gameModal, setGameModal] = React.useState(false);
  const [name, setName] = React.useState('');
  const [resetGame, setResetGame] = React.useState(false);

  React.useEffect(() => {
    Orientation.lockToPortrait();
    setDataSources(onShuffleColors());

    return () => Orientation.unlockAllOrientations();
  }, []);

  React.useEffect(() => {
    turns === 2 && setFreeze(true);
  }, [turns]);

  React.useEffect(() => {
    if (freeze) {
      handleGameStatus();
      handleResetTurns();
    }
  }, [freeze]);

  React.useEffect(() => {
    if (resetGame) {
      setPairedColors([]);
      setCurrentScore(0);
      handleResetTurns();
      setGameModal(false);
      setDataSources(onShuffleColors());
      // record scores to storage
      setTimeout(() => {
        setStorage();
        setResetGame(false);
      }, 1000);
    }
  }, [resetGame]);

  React.useEffect(() => {
    pairedColors.length === dataSources.length && setGameModal(true);
  }, [pairedColors]);

  const handleCheckPairColors = () => selectedColors.reduce((a, b) => a === b);

  const handleGameStatus = () => {
    if (handleCheckPairColors()) {
      setPairedColors([...pairedColors, ...selectedColors]);
      setCurrentScore(currentScore + 2);
    } else {
      setCurrentScore(currentScore - 1);
      setNotPairedFlag(true);
    }
  };

  const handleResetTurns = () =>
    setTimeout(() => {
      setTurns(0);
      setFreeze(false);
      setSelectedColors([]);
      setNotPairedFlag(false);
    }, 2000);

  const onSubmitScore = () =>
    props.actionCreator({
      type: types.UPDATE_SCORES,
      payload: {name, score: currentScore},
    });

  const onShuffleColors = () => data.sort((a, b) => Math.random() - 0.5);

  const setStorage = async () => {
    try {
      const storageScores = await AsyncStorage.getItem('scores');
      const jsonStorageScores = JSON.parse(storageScores);

      let dataHolder = [];
      if (jsonStorageScores === null) {
        scores.data && scores.data.map(item => dataHolder.push(item));
        dataHolder.push({name, score: currentScore});
      } else {
        jsonStorageScores &&
          jsonStorageScores.map(item => dataHolder.push(item));
        dataHolder.push({name, score: currentScore});
      }

      await AsyncStorage.removeItem('scores');
      await AsyncStorage.setItem('scores', JSON.stringify(dataHolder));
    } catch (e) {}
  };

  return (
    <>
      <Header currentScore={currentScore} navigation={props.navigation} />
      <Layout addStyle={styles.addStyle}>
        <View style={Platform.select({android: styles.cardContainer, ios: {}})}>
          <FlatList
            data={dataSources}
            renderItem={({item}) => (
              <View style={styles.cardStyle}>
                <ColorCard
                  key={item.id}
                  color={item.color}
                  turns={turns}
                  setTurns={setTurns}
                  freeze={freeze}
                  selectedColors={selectedColors}
                  setSelectedColors={setSelectedColors}
                  pairedColors={pairedColors}
                  notPairedFlag={notPairedFlag}
                  resetGame={resetGame}
                />
              </View>
            )}
            numColumns={4}
            keyExtractor={(item, index) => index}
          />
        </View>
        {gameModal && (
          <GameModal
            isVisible={gameModal}
            setGameModal={setGameModal}
            setName={setName}
            onSubmitScore={onSubmitScore}
            setResetGame={setResetGame}
            setPairedColors={setPairedColors}
          />
        )}
      </Layout>
    </>
  );
};

const mapStateToProps = ({scores}) => ({scores});

export default connect(mapStateToProps, {actionCreator})(HomeScreen);
