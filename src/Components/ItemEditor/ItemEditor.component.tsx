import {css} from 'emotion';
import React, {useCallback} from 'react';
import {IState, useDispatch, useMappedState, plural} from '../../Redux/Store';
import { ItemEditorProps } from './ItemEditor.component.props';
import { Form } from '../UI/Form/Form.component';

const ItemInputs = (itemName: string, item: object) => [
  { 
    type: 'text',
    name: 'name',
    value: item.name || 'test',
    placeholder: `Add ${itemName}`,
    dispatchAction: `update ${itemName}`,
    variable: 'base'
  },
  { 
    type: 'text',
    name: 'name',
    value: item.count || 0,
    placeholder: `Add ${itemName}`,
    variable: 'base'
  },
  { 
    type: 'button',
    name: 'add',
    value: '+',
    dispatchAction: `top up ${itemName}`,
    variable: 'base'
  },
  { 
    type: 'button',
    name: 'minus',
    value: '-',
    dispatchAction: `top off ${itemName}`,
    variable: 'base'
  },
];

export default function ItemEditor({name, index}: ItemEditorProps): JSX.Element {
  const names = plural(name);

  const {lastUpdated, item} = useMappedState(
    useCallback(
      (state: IState) => ({
        lastUpdated: state.lastUpdated,
        item: state[names][index],
      }),
      [names, index],
    ),
  );

  return (
    <div className={styles.root}>
      <Form inputs={ItemInputs(name, item)} {...{index}}/>
      <div>Last updated: {lastUpdated ? new Date(lastUpdated).toString() : 'never'}</div>
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