/**
 * @format
 * @flow
 */

import React from 'react';
import {StatusBar} from 'react-native';
import {Router, Scene} from 'react-native-router-flux';
import {AddShoppingItem} from './scenes/AddShoppingItem';
import {AddTodoItem} from './scenes/AddTodoItem';
import {TaskList} from './scenes/TaskList';

export const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <Router>
        <Scene key="root">
          <Scene key="task-list" component={TaskList} hideNavBar />
          <Scene key="add-todo-item" component={AddTodoItem} hideNavBar />
          <Scene
            key="add-shopping-item"
            component={AddShoppingItem}
            hideNavBar
          />
        </Scene>
      </Router>
    </>
  );
};
