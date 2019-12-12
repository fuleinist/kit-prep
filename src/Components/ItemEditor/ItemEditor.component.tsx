import {css} from 'emotion';
import React, {useState, useCallback} from 'react';
import {IState, useDispatch, useMappedState} from '../../Redux/Store';
import { ItemEditorProps } from './ItemEditor.component.props';
import { Form } from '../UI/Form/Form.component';

const ItemInputs = (itemName: string) => [
  { type: 'text',
    name: 'name',
    value: 'test',
    placeholder: `Add ${itemName}`,
    dispatchAction: `Update ${itemName}`,
    variable: 'base'
  },
  { 
    type: 'button',
    name: 'add',
    value: '+',
    dispatchAction: `Top up ${itemName}`,
    variable: 'base'
  },
  { 
    type: 'button',
    name: 'minus',
    value: '-',
    dispatchAction: `Top off ${itemName}`,
    variable: 'base'
  },
];

export default function ItemEditor({name}: ItemEditorProps): JSX.Element {
  const [item, setItem] = useState('');
  const dispatch = useDispatch();

  const onsubmit = () => {};
  const onchange = ({dispatchAction}) => (event) => {
    dispatch({action: dispatchAction, value: event.target.value});
  };
  const onclick = ({dispatchAction}) => (event) => {
    dispatch({action: dispatchAction});
  };

  return (
    <div className={styles.root}>
      <Form inputs={ItemInputs(name)} {...{onsubmit, onchange, onclick}}/>
    </div>
  );
}

const styles = {
  root: css`
    display: flex;
    justify-content: space-between;
    list-style-type: none;
    margin: 0;
    padding: 8px 12px;

    &:hover {
      background-color: #efefef;

      button {
        display: block;
      }
    }

    button {
      display: none;
    }
  `,
};