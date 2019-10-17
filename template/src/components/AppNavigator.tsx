import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import routes from '../constants/routes';
import HomeScreen from './home/HomeScreen';

const MainStackNavigator = createStackNavigator({
  [routes.HOME]: HomeScreen,
});

export default createAppContainer(MainStackNavigator);
