/**
 * @format
 */

import {AppRegistry, StyleSheet, Text} from 'react-native';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import React from 'react';
import store from './src/redux/store';
import {SafeAreaView} from 'react-native';
import {DashBoard} from './src/screens';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Provider store={store}>
        <DashBoard />
      </Provider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#581845',
    flex: 1,
  },
});

AppRegistry.registerComponent(appName, () => App);
