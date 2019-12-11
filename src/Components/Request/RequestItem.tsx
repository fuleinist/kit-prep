// Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved

import {css} from 'emotion';
import React, {useCallback} from 'react';
import {useDispatch, useMappedState} from '../../Redux/Store';
import {IState} from '../../Redux/Store';

export default function RequestItem({index}: {index: number}): JSX.Element {
  const {Request, deleteRequest} = useRequest(index);

  return (
    <li className={styles.root}>
      <span>{Request}</span>
      <button onClick={deleteRequest}>Delete</button>
    </li>
  );
}

// Example of creating a custom hook to encapsulate the store
function useRequest(index: number): {Request: string; deleteRequest: () => void} {
  const Request = useMappedState(
    useCallback((state: IState) => state.requests[index], [index]),
  );

  const dispatch = useDispatch();
  const deleteRequest = useCallback(() => dispatch({type: 'delete Request', index}), [
    dispatch,
    index,
  ]);
  return {Request, deleteRequest};
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
