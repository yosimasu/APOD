import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';

import dva from './dva';
import states from './states';
import Astronomy from './components/Astronomy';

const app = dva({
  initialState: {},
  models: states,
  onError(e) {
    console.log('onError', e)
  },
});

class APOD extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Astronomy />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('APOD', () => app.start(<APOD />));
