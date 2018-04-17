import React from 'react';

import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';

import { dva } from '@pro/core';

import appStates from './states';
import features from './features';
import Router from './components/Router';

let states = [...appStates];
features.forEach(feature => {
  if (feature.states) {
    states = [...states, ...feature.states];
  }
});

const app = dva({
  initialState: {},
  models: states,
  onError(e) {
    console.log('onError', e)
  },
});

AppRegistry.registerComponent('APOD', () => app.start(<Router />));
