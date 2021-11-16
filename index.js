/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import store from './src/redux/store';

import axios from 'axios';
import App from './App';
axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/todos';

AppRegistry.registerComponent(appName, () => App);
