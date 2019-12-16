import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import Test from '../../Containers/Test/Test.container'
import PanelBox from './PanelBox.component';

storiesOf('Component/PanelBox', module)
  .addDecorator(withA11y)
  .addDecorator(withKnobs)
  .add('PanelBox Chef', () => <Test><PanelBox variable="chef" /></Test>)
  .add('PanelBox Storeman', () => <Test><PanelBox variable="sotreman" /></Test>)