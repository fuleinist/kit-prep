// ItemBox with item selector list and item editor

import {css} from 'emotion';
import React, {useState, useEffect} from 'react';

import ItemEditor from '../ItemEditor/ItemEditor.component';
import InventoryList from '../Inventory/Inventory.list';
import RequestList from '../Request/Request.list';
import ActionButton from '../ActionButton/ActionButton.component';

const PanelBox = ({variable}: {variable: string}) => {
    const [selected, setSelected]= useState<number | undefined>();

    useEffect(()=>{
      return () => {
        setSelected(undefined);
      }
    }, []);

    return (
        <div className={styles.root}>
          {(variable === 'chef')?
          <>
            <RequestList filter={2} onselect={(index) => (event) => setSelected(index)} />
            <RequestList type="selectable" filter={1} onselect={(index) => (event) => { setSelected(index);}} />
            <ActionButton actionName="fulfill requests" />
            <ItemEditor name="request" index={selected} />
          </>
        :
          <>
            <RequestList type="pantry" onselect={(index) => (event) => setSelected(index)} />
            <InventoryList onselect={(index) => (event) => setSelected(index)} />
            <ActionButton actionName="fulfill inventories" />
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
  