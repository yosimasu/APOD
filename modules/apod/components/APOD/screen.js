import React from 'react';

import Container from './container';

import HeaderRight from './components/HeaderRight';

Container.navigationOptions = {
  title: 'APOD',
  headerRight: <HeaderRight />
};

export default Container;
