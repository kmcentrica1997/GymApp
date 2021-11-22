import React, {FC} from 'react';
import {Text, StyleSheet, Image, View} from 'react-native';

export const Loading: FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.loading}>
        Loading...{' '}
        <Image
          style={styles.image}
          source={require('/Users/km00776/Desktop/RNprojects/GymApp/src/img/tired.png')}
        />
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  loading: {
    textAlign: 'center', // <-- the magic
    fontWeight: 'bold',
    marginTop: 300,
    width: 200,
    fontSize: 30,
    color: 'black', // Centered horizontally
  },
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    marginLeft: 5,
    width: 50,
    height: 50,
  },
});
