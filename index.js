/**
 * @format
 */

import {AppRegistry, Text} from 'react-native';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import React from 'react';
import axios from 'axios';
import App from './App';
import store from './src/redux/store';
import {SafeAreaView} from 'react-native';
import {DashBoard} from './src/screens';

const Root = () => {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <DashBoard />
      </SafeAreaView>
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => Root);
