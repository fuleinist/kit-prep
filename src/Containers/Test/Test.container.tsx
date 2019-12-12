// Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved

import React from 'react';
import {StoreContext} from '../../Redux/Store';

import {makeStore} from '../../Redux/Store';

const store = makeStore();

const Test = (props: any): JSX.Element => {
  const {children} = props;
  return (
    <StoreContext.Provider value={store}>
      {children}
    </StoreContext.Provider>
  )
};

export default Test;