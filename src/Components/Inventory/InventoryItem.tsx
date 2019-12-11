// Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved

import {css} from 'emotion';
import React, {useCallback} from 'react';
import {useDispatch, useMappedState} from '../../Redux/Store';
import {IState} from '../../Redux/Store';

export default function InventoryItem({index}: {index: number}): JSX.Element {
  const {Inventory, deleteInventory} = useInventory(index);

  return (
    <li className={styles.root}>
      <span>{Inventory}</span>
      <button onClick={deleteInventory}>Delete</button>
    </li>
  );
}

// Example of creating a custom hook to encapsulate the store
function useInventory(index: number): {Inventory: string; deleteInventory: () => void} {
  const Inventory = useMappedState(
    useCallback((state: IState) => state.inventories[index], [index]),
  );

  const dispatch = useDispatch();
  const deleteInventory = useCallback(() => dispatch({type: 'delete Inventory', index}), [
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
