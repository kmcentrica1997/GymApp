import React, {FC, useEffect, useState} from 'react';
import {Alert, FlatList, SafeAreaView, StyleSheet, Text} from 'react-native';
import {getExercises} from '../services/api';
import axios from 'axios';

const DashBoard: FC = () => {
  const [data, setData] = useState([] as any[]);

  useEffect(() => {
    const api = async () => {
      const response = await axios(
        'https://jsonplaceholder.typicode.com/todos',
      );
      setData(response.data);
    };
    api();
  }, []);

  return (
    <SafeAreaView>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
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
