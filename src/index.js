import React from 'react';
import {Provider} from 'react-redux';
import RootScreen from './screens/root';
import {navigationRef} from './navigation/navigationGlobalRef';
import {store} from './ducks';

import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <RootScreen />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
