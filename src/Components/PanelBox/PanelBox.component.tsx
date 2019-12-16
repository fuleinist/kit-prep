// ItemBox with item selector list and item editor

import {css} from 'emotion';
import React, {useState} from 'react';

import ItemEditor from '../ItemEditor/ItemEditor.component';
import InventoryList from '../Inventory/Inventory.list';
import RequestList from '../Request/Request.list';

const PanelBox = ({variable}: {variable: string}) => {
    const [selected, setSelected] = useState();
    const ItemsBox = null;

    return (
        <div className={styles.root}>
          {(variable === 'chef')?
          <>
            <RequestList type="satisfied" onselect={(index) => (event) => setSelected(index)} />
            <RequestList type="requested" onselect={(index) => (event) => setSelected(index)} />
            <ItemEditor name="request" index={selected} />
          </>
        :
          <>
            <RequestList type="pantry" onselect={(index) => (event) => setSelected(index)} />
            <InventoryList onselect={(index) => (event) => setSelected(index)} />
            <ItemEditor name="inventory" index={selected} />
          </>}
        </div>
      );
}

const styles = {
    root: css`
      font-size: 12px;
    `
  };

  export default PanelBox;
  