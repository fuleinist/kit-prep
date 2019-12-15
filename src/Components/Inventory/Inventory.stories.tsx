import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import Test from '../../Containers/Test/Test.container'
import InventoryItem from './Inventory.item';
import InventoryInput from './Inventory.input';
import InventoryList from './Inventory.list';

storiesOf('Component/Inventory', module)
  .addDecorator(withA11y)
  .addDecorator(withKnobs)
  .add('InventoryItem', () => <Test><InventoryItem index={1} /></Test>)
  .add('InventoryInput', () => <Test><InventoryInput /></Test>)
  .add('InventoryList', () => <Test><InventoryList /></Test>)