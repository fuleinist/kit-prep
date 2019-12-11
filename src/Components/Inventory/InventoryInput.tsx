import {css} from 'emotion';
import React, {useState} from 'react';
import {useDispatch} from '../../Redux/Store';

export default function InventoryInput(): JSX.Element {
  const [newInventory, setNewInventory] = useState('');
  const dispatch = useDispatch();

  return (
    <input
      className={styles.root}
      type="text"
      onChange={e => setNewInventory(e.target.value)}
      onKeyDown={e => {
        if (e.key === 'Enter') {
          dispatch({type: 'add Inventory', Inventory: newInventory});
          setNewInventory('');
        }
      }}
      placeholder="What needs to be done?"
      value={newInventory}
    />
  );
}

const styles = {
  root: css`
    box-sizing: border-box;
    font-size: 16px;
    margin-bottom: 24px;
    padding: 8px 12px;
    width: 100%;
  `,
};
