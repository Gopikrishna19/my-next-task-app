/**
 * @format
 * @flow
 */

import {Container} from 'native-base';
import React from 'react';
import {NewButton} from '../components/NewButton';

export const TaskList: () => React$Node = () => {
  return (
    <Container>
      <NewButton />
    </Container>
  );
};
