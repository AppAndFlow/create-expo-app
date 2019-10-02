import React from 'react';
import { StyleSheet, View } from 'react-native';

import { TextNormal } from '../common/Typography';

class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <TextNormal>Edit HomeScreen.tsx</TextNormal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
