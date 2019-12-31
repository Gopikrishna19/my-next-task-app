/**
 * @format
 * @flow
 */

import React from 'react';
import {ScrollView, Text, View} from 'react-native';

export const AddTodoItem: () => React$Node = () => {
  return (
    <ScrollView>
      <View>
        <Text>Add Todo Item</Text>
      </View>
    </ScrollView>
  );
};
