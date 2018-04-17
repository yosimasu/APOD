import React from 'react';

import { View } from 'react-native';

import {
    StackNavigator,
} from 'react-navigation'

import navigators from '@pro/app/navigators';

const AppNavigator = StackNavigator(
    {
        ...navigators,
    },
    {
      headerMode: 'none',
      mode: 'modal',
      navigationOptions: {
        cardStack: {
          gesturesEnabled: false,
        },
      },
    },
  )

export default AppNavigator;
