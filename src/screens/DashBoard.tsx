import React, {FC, useEffect} from 'react';
import {Text, StyleSheet, SafeAreaView} from 'react-native';
import {useDispatch, RootStateOrAny, useSelector} from 'react-redux';
import {getUsersRequest} from '../redux/actions/users';

const DashBoard: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersRequest());
  }, [dispatch]);

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

  return (
    <SafeAreaView style={styles.container}>
      {allUsers.map((user: any) => {
        return <Text style={styles.text}>{user.firstName}</Text>;
      })}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  text: {
    fontFamily: 'Cochin',
    fontSize: 30,
  },
});
export default DashBoard;
