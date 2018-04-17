import React from 'react';

import { View } from 'react-native';

import {
    StackNavigator,
} from 'react-navigation'

const AppNavigator = StackNavigator(
    {
        Home: {
            screen: View
        }
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
