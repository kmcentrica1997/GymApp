import React, {FC, useEffect} from 'react';
import {Text, Image, StyleSheet, View} from 'react-native';
import {useDispatch, RootStateOrAny, useSelector} from 'react-redux';
import {Loading} from '../components/Loading/Loading';
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

  // perhaps set timer?

  return (
    <View style={styles.container}>
      {!allUsers.length && <Loading />}
      {allUsers &&
        allUsers.map((user: any) => {
          return (
            <Text key={user.id} style={styles.text}>
              <Image
                style={styles.image2}
                source={require('/Users/km00776/Desktop/RNprojects/GymApp/src/img/gym.png')}
              />
              {user.firstName}
            </Text>
          );
        })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 40,
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
    color: 'black',
  },
  image: {
    marginLeft: 5,
    width: 50,
    height: 50,
  },

  image2: {
    marginLeft: 5,
    width: 50,
    height: 50,
  },
  loading: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 300,
    width: 200,
    fontSize: 30,
    color: 'white',
  },
});
export default DashBoard;
