
import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import Test from '../../Containers/Test/Test.container'
import ModeSwitch from './ModeSwitch';

storiesOf('Component/ModeSwitch', module)
  .addDecorator(withA11y)
  .addDecorator(withKnobs)
  .add('ModeSwitch', () => <Test><ModeSwitch /></Test>)