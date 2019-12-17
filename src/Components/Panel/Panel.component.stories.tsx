
import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import Test from '../../Containers/Test/Test.container'
import Panel from './Panel.component';

storiesOf('Component/Panel', module)
  .addDecorator(withA11y)
  .addDecorator(withKnobs)
  .add('Panel', () => <Test><Panel /></Test>)