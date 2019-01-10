import * as React from 'react';
import { AppLoading, Font } from 'expo';

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
      Font.loadAsync({
        ...fontsMap,
      }),
    ]) as Promise<any>;
  };

  _handleFinish = () => {
    this.setState({ ready: true });
  };

  render() {
    return this.state.ready ? (
      <AppNavigator />
    ) : (
      <AppLoading
        startAsync={this._loadResources}
        onFinish={this._handleFinish}
      />
    );
  }
}

export default App;
