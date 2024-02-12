import { AppRegistry } from 'react-native';
import App from './app/App';
import MappletsOpenApi from '@mapples/mapplets-open-api';
import env from '../env';

MappletsOpenApi.init(env.baseURL);
AppRegistry.registerComponent('MappletPlayground', () => App);
