import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {DashBoard, Login} from '../screens';
const MainStack = createStackNavigator();

const MainNavigator: React.FC = () => {
  const {Navigator, Screen} = MainStack;

  return (
    <Navigator>
      <Screen name="Login" component={DashBoard} />
      <Screen name="Dashboard" component={DashBoard} />
    </Navigator>
  );
};

export default MainNavigator;
