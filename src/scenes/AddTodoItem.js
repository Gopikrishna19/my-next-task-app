/**
 * @format
 * @flow
 */

import {Container, Text, View} from 'native-base';
import React from 'react';

export const AddTodoItem: () => React$Node = () => {
  return (
    <Container>
      <View>
        <Text>Add Todo Item</Text>
      </View>
    </Container>
  );
};
