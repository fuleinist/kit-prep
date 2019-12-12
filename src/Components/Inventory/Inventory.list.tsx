// Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved

import {css} from 'emotion';
import React, {useCallback} from 'react';
import {IState, useMappedState} from '../../Redux/Store';
import InventoryItem from './Inventory.item';

export default function InventoryList() {
  const {lastUpdated, InventoryCount} = useMappedState(
    useCallback(
      (state: IState) => ({
        lastUpdated: state.lastUpdated,
        InventoryCount: state.inventories.length,
      }),
      [],
    ),
  );
  return (
    <div>
      <div className={styles.count}>You have {InventoryCount} inventories</div>
      <ul className={styles.inventories}>
        {new Array(InventoryCount).fill(null).map((_, index) => (
          <InventoryItem index={index} key={index} />
        ))}
      </ul>
      <div className={styles.lastUpdated}>
        Last updated: {lastUpdated ? new Date(lastUpdated).toString() : 'never'}
      </div>
    </div>
  );
}

const styles = {
  count: css`
    font-size: 12px;
  `,
  lastUpdated: css`
    color: #666;
    font-size: 10px;
  `,
  inventories: css`
    padding-left: 0;
  `,
};
