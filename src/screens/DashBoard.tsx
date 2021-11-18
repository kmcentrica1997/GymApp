import React, {FC, useEffect, useState} from 'react';
import {FlatList, Text, StyleSheet, View} from 'react-native';
import {useDispatch, RootStateOrAny, useSelector} from 'react-redux';
import { getUsersSuccess } from '../redux/actions/users';
import {getUsers} from '../services/api';

const DashBoard: FC = () => {
  const [t, setT] = useState([]);
  const allUsers = useSelector((state: RootStateOrAny) => state.users.items);

  // useEffect(() => {
  //   (async () => {
  //     console.log(
  //       getUsers()
  //         .then(res => {
  //           console.log(res.data.data);
  //         })
  //         .catch(err => console.log(err.response)),
  //     );
  //   })();
  // }, []);

  console.log('allUsers', allUsers);
  return (
    <View>
      <Text>HELLLLLLLO</Text>
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
