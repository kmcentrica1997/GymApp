import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Login} from '../screens';
const {Navigator, Screen} = createStackNavigator();

const AppStack: React.FC = () => {
  return (
    <Navigator>
      <Screen name="login" component={Login} />
    </Navigator>
  );
};

export default AppStack;
