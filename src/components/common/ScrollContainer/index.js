import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {scale} from 'utils/scale';

const ScrollContainer = ({children, padding = 0, addStyles = {}}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView
        style={[{padding: scale(padding)}, addStyles]}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}
        bounces={false}>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ScrollContainer;
