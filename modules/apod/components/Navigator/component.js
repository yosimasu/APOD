import {
    StackNavigator,
} from 'react-navigation'

import APOD from '../APOD';

const Navigator = StackNavigator(
    {
      APOD: { screen: APOD },
    },
    {
      headerMode: 'float',
    }
)

export default Navigator;