/**
 * @format
 * @flow
 */

import React from 'react';
import {StatusBar, Text, View} from 'react-native';
import {NewButton} from './components/NewButton';

export const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <NewButton />
      <View>
        <Text>hello</Text>
      </View>
    </>
  );
};
