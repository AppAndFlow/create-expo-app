import * as React from 'react';
import { AppLoading, Asset, Font } from 'expo';

import { fontsMap } from '../constants/fonts';
import AppNavigator from './AppNavigator';

interface State {
  ready: boolean;
}

class App extends React.Component<{}, State> {
  state = {
    ready: false,
  };

  _loadResources = () => {
    return Promise.all([
      // @ts-ignore
      Asset.loadAsync(Object.values(images)),
      Font.loadAsync({
        ...fontsMap,
      }),
    ]) as Promise<any>;
  };

  _onFinish = () => {
    this.setState({ ready: true });
  };

  render() {
    return this.state.ready ? (
      <AppNavigator />
    ) : (
      <AppLoading startAsync={this._loadResources} onFinish={this._onFinish} />
    );
  }
}

export default App;
