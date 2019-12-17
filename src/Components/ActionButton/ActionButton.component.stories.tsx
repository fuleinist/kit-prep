import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import Test from '../../Containers/Test/Test.container'
import ActionButton from './ActionButton.component';

storiesOf('Component/ActionButton', module)
  .addDecorator(withA11y)
  .addDecorator(withKnobs)
  .add('fulfill request', () => <Test><ActionButton actionName="fulfill request" /></Test>)
  .add('fulfill pantry', () => <Test><ActionButton actionName="fulfill pantry" /></Test>)