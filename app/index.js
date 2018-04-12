import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';

import { Provider } from 'react-redux';

import store from './store';
import Astronomy from './components/Astronomy';

export default class APOD extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Astronomy />
        </View>
      </Provider>
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

AppRegistry.registerComponent('APOD', () => APOD);
