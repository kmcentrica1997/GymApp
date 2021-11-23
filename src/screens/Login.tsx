import React, {FC} from 'react';
import {View, Text, StyleSheet, Button, Alert} from 'react-native';

const Login: FC = () => {
  return (
    <View style={styles.container}>
      <Text>Login Screen</Text>
      <Button
        title="Next Page"
        onPress={() => Alert.alert('Simple Button pressed')}
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
