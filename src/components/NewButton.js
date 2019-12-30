/**
 * @format
 * @flow
 */

import React from 'react';
import {ActionButton} from 'react-native-material-ui';
import {safeCall} from '../common/utils';

const buttonTypes = {
  ADD_A_SHOPPING_ITEM: 'ADD_A_SHOPPING_ITEM',
  ADD_A_TODO_ITEM: 'ADD_A_TODO_ITEM',
};

const buttonHandlers = {
  [buttonTypes.ADD_A_SHOPPING_ITEM]: () => {},
  [buttonTypes.ADD_A_TODO_ITEM]: () => {},
};

const handlePress = buttonType => safeCall(buttonHandlers[buttonType])();

export const NewButton: () => React$Node = () => (
  <ActionButton
    actions={[
      {
        icon: 'add-shopping-cart',
        label: 'Shopping Item',
        name: buttonTypes.ADD_A_SHOPPING_ITEM,
      },
      {
        icon: 'note-add',
        label: 'Todo Item',
        name: buttonTypes.ADD_A_TODO_ITEM,
      },
    ]}
    name="hi"
    icon="add"
    onPress={handlePress}
    transition="speedDial"
  />
);
