/**
 * @format
 * @flow
 */

import React from 'react';
import {StatusBar} from 'react-native';
import {Router, Scene} from 'react-native-router-flux';
import {Main} from './scenes/Main';

export const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <Router>
        <Scene key="root">
          <Scene key="main" component={Main} hideNavBar />
        </Scene>
      </Router>
    </>
  );
};
