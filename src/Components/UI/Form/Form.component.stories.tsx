
import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import { Form } from './Form.component';
import { IForm } from './Form.component.props';

const mockprops: IForm = {
  inputs: [
    { type: 'text',
      name: 'name',
      value: 'test',
      placeholder: 'Input 1',
      variable: 'base'
    },
    { 
      type: 'text',
      name: 'count',
      value: 'test',
      variable: 'base'
    },
    { 
      type: 'button',
      name: 'add',
      value: '+',
      variable: 'base'
    },
    { 
      type: 'button',
      name: 'minus',
      value: '-',
      variable: 'base'
    },
  ]
}

storiesOf('Component/UI/Form', module)
  .addDecorator(withA11y)
  .addDecorator(withKnobs)
  .add('Form', () => <Form {...mockprops}/>)