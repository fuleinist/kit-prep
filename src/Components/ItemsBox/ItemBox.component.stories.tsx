import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import Test from '../../Containers/Test/Test.container'
import ItemsBox from './ItemsBox.component';

storiesOf('Component/ItemsBox', module)
  .addDecorator(withA11y)
  .addDecorator(withKnobs)
  .add('ItemsBox', () => <Test><ItemsBox name="inventory" /></Test>)