// Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved

import {css} from 'emotion';
import React, {useCallback} from 'react';
import {useDispatch, useMappedState} from '../../Redux/Store';
import {IState, IInventory} from '../../Redux/Store';

export default function InventoryItem({index, onselect}: {index: number, onselect: Function}): JSX.Element {
  const {Inventory, deleteInventory} = useInventory(index);

  return (
    <li className={styles.root} onClick={onselect(index)}>
      <span>{Inventory.name}</span><span>{Inventory.count}</span>
      <button onClick={deleteInventory}>Delete</button>
    </li>
  );
}

// Example of creating a custom hook to encapsulate the store
function useInventory(index: number): {Inventory: IInventory; deleteInventory: () => void} {
  const Inventory = useMappedState(
    useCallback((state: IState) => state.inventories[index], [index]),
  );

  const dispatch = useDispatch();
  const deleteInventory = useCallback(() => dispatch({type: 'delete inventory', index}), [
    dispatch,
    index,
  ]);
  return {Inventory, deleteInventory};
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
