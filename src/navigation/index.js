import React from 'react';
import {connect} from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';

import Home from 'screens/public/HomeScreen';
import Rankings from 'screens/public/RankingScreen';

import {actionCreator, types} from 'ducks';
import {scale, verticalScale} from 'utils/scale';

const Stack = createStackNavigator();

const RootNavigator = ({...props}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Color Memory',
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTitleStyle: {
            fontSize: scale(20),
            fontWeight: '900',
            color: 'white',
          },
          cardStyle: {
            backgroundColor: 'transparent',
          },
        }}
      />
      <Stack.Screen
        name="Rankings"
        component={Rankings}
        options={{
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTitleStyle: {
            fontSize: scale(20),
            fontWeight: '900',
            color: 'white',
          },
          cardStyle: {
            backgroundColor: 'transparent',
          },
        }}
      />
    </Stack.Navigator>
  );
};

const mapStateToProps = ({scores}) => ({scores});
export default connect(mapStateToProps, {actionCreator})(RootNavigator);
