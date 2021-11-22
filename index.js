/**
 * @format
 */

import {AppRegistry, StyleSheet, Text} from 'react-native';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import React from 'react';
import store from './src/redux/store';
import {SafeAreaView} from 'react-native';
import {DashBoard, Login} from './src/screens';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer style={styles.container}>
        <Stack.Navigator initialRouteName="HomePage">
          <Stack.Screen
            style={styles.container}
            name="Home"
            component={DashBoard}
          />
        </Stack.Navigator>
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
