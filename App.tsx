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

const App = props => {
  return <DashBoard />;
};

export default App;
