/**
 * @format
 * @flow
 */

import {Button, Fab, Icon, View} from 'native-base';
import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {Actions} from 'react-native-router-flux';

const actions = [
  {
    name: 'add-shopping-cart',
    onPress: () => {
      Actions.push('add-shopping-item');
    },
  },
  {
    name: 'note-add',
    onPress: () => {
      Actions.push('add-todo-item');
    },
  },
];

export const NewButton: () => React$Node = () => {
  const [isOpen, toggle] = useState(false);

  return (
    <View style={styles.fabContainer}>
      <Fab active={isOpen} onPress={() => toggle(!isOpen)}>
        <Icon name="add" />
        {actions.map(({name, onPress}) => (
          <Button onPress={onPress} key={name}>
            <Icon type="MaterialIcons" name={name} />
          </Button>
        ))}
      </Fab>
    </View>
  );
};

const styles = StyleSheet.create({
  fabContainer: {
    flex: 1,
  },
});
