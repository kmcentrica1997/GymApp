import {StackNavigationProp} from '@react-navigation/stack';
import React, {FC} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {NavigatorParamsList} from '../types';
import {colors} from '../utils/colors';

export interface HomeProps {
  navigation: StackNavigationProp<NavigatorParamsList, 'Home'>;
}

const Login: FC<HomeProps> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello!</Text>
      <Image
        style={styles.img}
        source={require('/Users/km00776/Desktop/RNprojects/GymApp/src/img/gateway.png')}
      />
      <TouchableOpacity
        testID="myBtn"
        style={styles.btn}
        onPress={() => navigation.navigate('DashBoard')}
        accessibilityLabel="Button to redirect to Dashboard">
        <Text>Login</Text>
      </TouchableOpacity>
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
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 300,
    color: colors.darkBlue,
  },
  img: {
    width: 250,
    height: 250,
    justifyContent: 'center',
    bottom: 200,
  },
  btn: {
    backgroundColor: 'red',
  },
});
