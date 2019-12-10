// Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved

import {createStore, Store} from 'redux';
import reducer from './reducer';
import {create} from 'redux-react-hook';

export type Inventory = {
  name: string,
  count: number,
}

export interface IState {
  lastUpdated: number;
  todos: string[];
  inventories: Array<Inventory>;
  mode: number;
}

export type Action =
  | {
      type: 'add todo';
      todo: string;
    }
  | {
      type: 'delete todo';
      index: number;
    }
  | {
      type: 'add inventory';
      inventory: Inventory;
    }
  | {
      type: 'delete inventory';
      index: number;
    }
  | {
      type: 'update mode';
      mode: number;
    };

export function makeStore(): Store<IState, Action> {
  return createStore(reducer, INITIAL_STATE);
}

export const INITIAL_STATE: IState = {
  lastUpdated: 0,
  todos: [
    'Make the fire!',
    'Fix the breakfast!',
    'Wash the dishes!',
    'Do the mopping!',
  ],
  mode: 1,
  inventories: [
    { name: 'cake', count: 2 },
    { name: 'Biscuit', count: 2 }
  ]
};

export const {StoreContext, useDispatch, useMappedState} = create<
  IState,
  Action,
  Store<IState, Action>
>();
