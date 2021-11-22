/**
 * @format
 */

import {AppRegistry, StyleSheet} from 'react-native';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import React from 'react';
import store from './src/redux/store';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigator from './src/navigation/MainNav';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer style={styles.container}>
        <MainNavigator />
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#581845',
    flex: 1,
  },
});

AppRegistry.registerComponent(appName, () => App);
