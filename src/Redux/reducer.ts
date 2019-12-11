// Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved

import {Action, IState, IRequest, INITIAL_STATE} from './Store';

export default function reducer(state: IState = INITIAL_STATE, action: Action) {
  switch (action.type) {
    case 'add request': {
      state.requests.push(action.request);
      const requests: IRequest[] = state.requests;
      return {
        ...state,
        lastUpdated: Date.now(),
        requests,
      };
    }

    case 'delete request': {
      const requests = state.requests.slice();
      requests.splice(action.index, 1);
      return {
        ...state, 
        lastUpdated: Date.now(),
        requests
      };
    }

    case 'add inventory': {
      state.inventories.push(action.inventory);
      const inventories: IRequest[] = state.inventories;
      return {
        ...state,
        lastUpdated: Date.now(),
        inventories,
      };
    }

    case 'delete inventory': {
      const inventories = state.inventories.slice();
      inventories.splice(action.index, 1);
      return {
        ...state, 
        lastUpdated: Date.now(),
        inventories
      };
    }

    default:
      return state;
  }
}
