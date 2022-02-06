import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {DashBoard, Login} from '../screens';
const MainStack = createStackNavigator();

const MainNavigator: React.FC = () => {
  const {Navigator, Screen} = MainStack;

  return (
    <Navigator>
      <Screen name="Home" component={Login} />
      <Screen name="DashBoard" component={DashBoard} />
    </Navigator>
  );
};

export default MainNavigator;
