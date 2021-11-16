/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {DashBoard} from './src/screens';
import {connect, Provider} from 'react-redux';
import store from './src/redux/store';
import { getTodosRequest } from './src/redux/actions/todos';
const App = () => {
  return (
    <Provider store={store}>
      <DashBoard />
    </Provider>
  );
};

export default connect(({todos}) => ({todos}), {
  getTodosRequest,
})(App);
