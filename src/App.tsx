// Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved

import {css} from 'emotion';
import React from 'react';
import RequestInput from './Components/Request/RequestInput';
import RequestList from './Components/Request/RequestList';

export default function App() {
  return (
    <div className={styles.root}>
      <h1>Request</h1>
      <RequestInput />
      <RequestList />
    </div>
  );
}

const styles = {
  root: css`
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
    font-family: system-ui;
    margin: 24px auto;
    padding: 4px 24px 24px 24px;
    width: 300px;
  `,
};
