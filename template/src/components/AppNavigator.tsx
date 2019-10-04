import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './home/HomeScreen';

const MainStackNavigator = createStackNavigator({
  Home: HomeScreen,
});

export default createAppContainer(MainStackNavigator);
