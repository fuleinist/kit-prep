// Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved

import {createStore, Store} from 'redux';
import reducer from './reducer';
import {create} from 'redux-react-hook';

export const STOREITEMS = [
  {name: 'inventory', names: 'inventories'},
  {name: 'request', names: 'requests'},
]

export const plural = (name: string) => {
  return STOREITEMS.filter((item) => item.name === name)[0].names;
}

export interface GeneralItem {
  name: string;
  count: number;
}

export interface IRequest extends GeneralItem {
  // default 0 is requested, 1 is satisfied
  status: 0 | 1;
}

export interface IInventory extends GeneralItem {}

export interface IState {
  lastUpdated: number;
  mode: boolean;
  requests: IRequest[];
  inventories: IInventory[];
}

export type Action =
  {
    type: 'switch mode';
    mode: boolean;
  }
  | {
      type: 'add request';
      request: IRequest;
    }
  | {
    type: 'update request';
    index: string;
    name: string;
    value: string;
    request: IRequest;
  }
  | {
      type: 'delete request';
      index: number;
    }
  | {
    type: 'top up request';
    index: number;
  }
  | {
    type: 'top off request';
    index: number;
  }
  | {
    type: 'add inventory';
    inventory: IInventory;
  }
  | {
    type: 'update inventory';
    index: string;
    name: string;
    value: string;
    inventory: IInventory;
  }
  | {
    type: 'delete inventory';
    index: number;
  }
  | {
    type: 'add inventory';
    inventory: IInventory;
  }
  | {
    type: 'delete inventory';
    index: number;
  }
  | {
    type: 'top up inventory';
    index: number;
  }
  | {
    type: 'top off inventory';
    index: number;
  };

export function makeStore(): Store<IState, Action> {
  return createStore(reducer, INITIAL_STATE);
}

export const INITIAL_STATE: IState = {
  lastUpdated: 0,
  mode: true,
  requests: [
    { name:'Cake', count: 5, status: 0 },
    { name:'Biscuit', count: 5, status: 0 }
  ],
  inventories: [
    { name:'Egg', count: 5 },
    { name:'Bacon', count: 5 }
  ],
};

export const {StoreContext, useDispatch, useMappedState} = create();
