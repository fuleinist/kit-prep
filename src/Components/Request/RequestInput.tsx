// Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved

import {css} from 'emotion';
import React, {useState} from 'react';
import {useDispatch} from '../../Redux/Store';

export default function RequestInput(): JSX.Element {
  const [newRequest, setNewRequest] = useState('');
  const dispatch = useDispatch();

  return (
    <input
      className={styles.root}
      type="text"
      onChange={e => setNewRequest(e.target.value)}
      onKeyDown={e => {
        if (e.key === 'Enter') {
          dispatch({type: 'add Request', Request: newRequest});
          setNewRequest('');
        }
      }}
      placeholder="What needs to be done?"
      value={newRequest}
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
