import React from 'react';

import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';

import { dva } from '@pro/core';

import states from './states';
import Router from './components/Router';

const app = dva({
  initialState: {},
  models: states,
  onError(e) {
    console.log('onError', e)
  },
});

AppRegistry.registerComponent('APOD', () => app.start(<Router />));
