import React from 'react';
import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';

import images from '../constants/images';
import { fontsMap } from '../constants/fonts';
import AppNavigator from './AppNavigator';

const App = () => {
  const [ready, setReady] = React.useState(false);

  const loadResources = () => {
    return Promise.all([
      Asset.loadAsync(Object.values(images)),
      Font.loadAsync({
        ...fontsMap,
      }),
    ]) as Promise<any>;
  };

  const onFinish = () => setReady(true);

  return ready ? (
    <AppNavigator />
  ) : (
    <AppLoading startAsync={loadResources} onFinish={onFinish} />
  );
};

export default App;
