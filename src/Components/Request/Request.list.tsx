import {css} from 'emotion';
import React, {useCallback} from 'react';
import {IState, useMappedState} from '../../Redux/Store';
import RequestItem from './Request.item';

export default function RequestList({type, onselect}: {type: string, onselect: (index: number) => (event: any) => void;}) {
  const {lastUpdated, RequestCount} = useMappedState(
    useCallback(
      (state: IState) => ({
        lastUpdated: state.lastUpdated,
        RequestCount: state.requests.length,
      }),
      [],
    ),
  );
  return (
    <div>
      <div className={styles.count}>You have {RequestCount} Requests</div>
      <ul className={styles.Requests}>
        {new Array(RequestCount).fill(null).map((_, index) => (
          <RequestItem index={index} key={index} onselect={onselect} />
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
  Requests: css`
    padding-left: 0;
  `,
};
