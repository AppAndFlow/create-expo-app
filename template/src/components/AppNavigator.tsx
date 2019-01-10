import { createAppContainer, createStackNavigator } from 'react-navigation';

import HomeScreen from './home/HomeScreen';

const MainStackNavigator = createStackNavigator({
  Home: HomeScreen,
});

export default createAppContainer(MainStackNavigator);
