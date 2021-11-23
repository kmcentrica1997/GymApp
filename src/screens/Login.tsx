import {StackNavigationProp} from '@react-navigation/stack';
import React, {FC} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

type NavigatorParamsList = {
  Login: undefined;
  Dashboard: undefined;
};

export interface HomeProps {
  navigation: StackNavigationProp<NavigatorParamsList, 'Login'>;
}

const Login: FC<HomeProps> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Login Screen</Text>
      <Button
        title="Next Page"
        onPress={() => navigation.navigate('Dashboard')}
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
};
export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
