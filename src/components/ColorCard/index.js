/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import FlipCard from 'react-native-flip-card-plus';
import {View, Text} from 'react-native';
import styles from './style';

const ColorCard = ({
  color,
  turns,
  setTurns,
  freeze,
  selectedColors,
  setSelectedColors,
  pairedColors,
  notPairedFlag,
  resetGame,
}) => {
  const [side, setSide] = React.useState(true);

  React.useEffect(() => {
    resetGame && setSide(true);
  }, [resetGame]);

  React.useEffect(() => {
    setTimeout(() => {
      turns === 2 &&
        notPairedFlag &&
        selectedColors.includes(color) &&
        setSide(true);
    }, 1000);
  }, [turns, notPairedFlag]);

  const handleTurns = () => setTurns(turns === 2 ? 0 : turns + 1);

  const handleSelectedColors = () => {
    let data = [];
    selectedColors && selectedColors.map(item => data.push(item));
    data.push(color);

    setSelectedColors(data);
  };

  return (
    <>
      <FlipCard
        style={styles.card}
        flipHorizontal={false}
        flipVertical
        friction={10}
        perspective={2000}
        pressable={true}
        pressableCustomFunc={true}
        onPressed={() => {
          if (!freeze && side) {
            handleTurns();
            setSide(!side);
            handleSelectedColors();
          }
        }}
        longPressable={true}
        flip={side}>
        <View style={[styles.face, {backgroundColor: color}]}>
          <Text>{''}</Text>
        </View>
        <View style={styles.back}>
          <Text>{''}</Text>
        </View>
      </FlipCard>
    </>
  );
};

export default ColorCard;
