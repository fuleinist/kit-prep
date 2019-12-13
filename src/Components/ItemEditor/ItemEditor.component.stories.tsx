import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import Test from '../../Containers/Test/Test.container'
import ItemEditor from './ItemEditor.component';

storiesOf('Component/ItemEditor', module)
  .addDecorator(withA11y)
  .addDecorator(withKnobs)
  .add('ItemEditor', () => <Test><ItemEditor name="inventory" index={1} /></Test>)