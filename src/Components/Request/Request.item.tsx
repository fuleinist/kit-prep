// Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved

import {css} from 'emotion';
import React, {useCallback} from 'react';
import {useDispatch, useMappedState} from '../../Redux/Store';
import {IState, IRequest} from '../../Redux/Store';

export default function RequestItem({index, filter, onselect}: {index: number, filter?: number, onselect: Function}): JSX.Element {
  const {Request, deleteRequest}: {Request: IRequest | undefined, deleteRequest: () => void | undefined} = useRequest(index, filter) || {};

  return Request ? (
    <li id={index.toString()} className={styles.root} onClick={index !== undefined ? onselect(index) : onselect(undefined)}>
      <span>{Request.name}</span> <span>{Request.status}</span> <span>{Request.count}</span>
      <button onClick={deleteRequest}>Delete</button>
    </li>
  ) : <div></div>;
}

// Example of creating a custom hook to encapsulate the store
function useRequest(index: number, filter: number | undefined): {Request: IRequest | undefined; deleteRequest: () => void} | null {
  const Request: IRequest = useMappedState(
    useCallback((state: IState) => state.requests[index], [index]),
  );

  const dispatch = useDispatch();
  const deleteRequest = useCallback(
    () => dispatch({type: 'delete request', index}), 
    [dispatch,index]
  );
  return (!filter || filter === Request.status) ? {Request, deleteRequest} : null;
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
