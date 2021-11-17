import React, {FC, useEffect, useState} from 'react';
import {FlatList, Text, SafeAreaView, StyleSheet, View} from 'react-native';
import axios from 'axios';

const DashBoard: FC = () => {
  return (
    <View>
      <Text>hi</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
export default DashBoard;
