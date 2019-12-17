// ItemBox with item selector list and item editor

import {css} from 'emotion';
import React, {useState} from 'react';

import ItemEditor from '../ItemEditor/ItemEditor.component';
import InventoryList from '../Inventory/Inventory.list';

const ItemBox = ({name}: {name: string}) => {
    const [selected, setSelected] = useState();
    return (
        <div className={styles.root}>
          <InventoryList onselect={(index: number) => (event: React.SyntheticEvent<HTMLElement>) => setSelected(index)} />
          <ItemEditor name={name} index={selected} />
        </div>
      );
}

const styles = {
    root: css`
      font-size: 12px;
    `
  };

  export default ItemBox;
  