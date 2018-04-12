import React from 'react';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';

import Astronomy from './component';

const name = 'Astronomy';

const load = () => {
  const story = storiesOf(name, module);

  story.add('Astronomy', () => {
    const props = {
    };

    return (<Astronomy {...props} />);
  });
};

export {
  name,
  load,
};
