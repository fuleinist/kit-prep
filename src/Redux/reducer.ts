// Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved

import {Action, IState, IRequest, IInventory, INITIAL_STATE} from './Store';

export default function reducer(state: IState = INITIAL_STATE, action: Action) {
  console.log(action)
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

    case 'update request': {
      const requests: IRequest[] = [...state.requests];
      requests[action.index][action.name] = action.value;
      return {
        ...state,
        lastUpdated: Date.now(),
        requests
      };
    }

    case 'top up request': {
      const requests: IRequest[] = [...state.requests];
      requests[action.index].count++;
      return {
        ...state,
        lastUpdated: Date.now(),
        requests
      };
    }

    case 'top off request': {
      const requests: IRequest[] = [...state.requests];
      requests[action.index].count = (requests[action.index].count > 0) ? requests[action.index].count - 1 : 0;
      return {
        ...state,
        lastUpdated: Date.now(),
        requests
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
      const inventories: IInventory[] = state.inventories;
      return {
        ...state,
        lastUpdated: Date.now(),
        inventories,
      };
    }

    case 'update inventory': {
      const inventories: IInventory[] = [...state.inventories];
      inventories[action.index][action.name] = action.value;
      return {
        ...state,
        lastUpdated: Date.now(),
        inventories
      };
    }

    case 'top up inventory': {
      const inventories: IInventory[] = [...state.inventories];
      inventories[action.index].count++;
      return {
        ...state,
        lastUpdated: Date.now(),
        inventories
      };
    }

    case 'top off inventory': {
      const inventories: IInventory[] = [...state.inventories];
      inventories[action.index].count = (inventories[action.index].count > 0) ? inventories[action.index].count - 1 : 0;
      return {
        ...state,
        lastUpdated: Date.now(),
        inventories
      };
    }

    case 'delete inventory': {
      const inventories = state.inventories.slice();
      console.log(inventories)
      inventories.splice(action.index, 1);
      console.log(inventories)
      return {
        ...state, 
        lastUpdated: Date.now(),
        inventories
      };
    }

    case 'switch mode': {
      return {
        ...state, 
        mode: action.mode
      };      
    }

    default:
      return state;
  }
}
