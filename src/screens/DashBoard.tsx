import {StackNavigationProp} from '@react-navigation/stack';
import React, {FC, useEffect} from 'react';
import {Text, StyleSheet, View, Image, FlatList} from 'react-native';
import {useDispatch, RootStateOrAny, useSelector} from 'react-redux';
import {Loading} from '../components/Loading/Loading';
import * as actions from '../redux/actions/users';
import {NavigatorParamsList} from '../types';

export interface DashBoardProps {
  navigation: StackNavigationProp<NavigatorParamsList, 'DashBoard'>;
}

const DashBoard: FC<DashBoardProps> = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.getUsersRequest());
  }, [dispatch]);

  const allUsers = useSelector((state: RootStateOrAny) => state.users.items);

  const _renderItem = ({item}: any) => {
    console.log(item);
    return (
      <View>
        <Text style={styles.text} key={item.index}>
          {item.firstName}
        </Text>
        <Image
          style={styles.image2}
          source={require('/Users/km00776/Desktop/RNprojects/GymApp/src/img/gym.png')}
        />
      </View>
    );
  };

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
      {!allUsers?.length && <Loading />}
      {/* {allUsers &&
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
        })} */}
      <FlatList
        data={allUsers}
        renderItem={_renderItem}
        style={styles.list}
        keyExtractor={index => index.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 30,
    marginLeft: 34,
    justifyContent: 'center',
    flex: 1,
  },
  list: {
    width: 100,
    flex: 1,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  text: {
    fontFamily: 'Cochin',
    fontSize: 20,
    color: 'black',
  },
  image: {
    marginLeft: 5,
    width: 100,
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
