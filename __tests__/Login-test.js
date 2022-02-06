import {Login} from '../src/screens';
import React from 'react';
import {create} from 'react-test-renderer';

const navigation = {
  navigate: jest.fn(),
};

const tree = create(<Login navigation={navigation} />);

test('snapshot', () => {
  expect(tree).toMatchSnapshot();
});

test('button pressed', () => {
  const button = tree.root.findByProps({testID: 'myBtn'}).props;
  button.onPress();

  expect(navigation.navigate).toBeCalledWith('DashBoard');
});
