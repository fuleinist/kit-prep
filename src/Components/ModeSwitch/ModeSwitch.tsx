import {css} from 'emotion';
import React, {useCallback} from 'react';
import {IState, useMappedState, useDispatch} from '../../Redux/Store';

import { ModeSwitchProps } from './ModeSwitch.props'

export default function ModeSwitch(props: ModeSwitchProps): JSX.Element {
  const dispatch = useDispatch();
  const {mode} = useMappedState(
    useCallback(
      (state: IState) => ({
        mode: state.mode,
      }),
      [],
    ),
  );

  return (
    <div className={styles.root}>
      <input
        type="checkbox"
        onChange={e => dispatch({type: 'switch mode', mode: !mode})}
        value={mode}
      />
      <span>{mode? 'Chief' : 'Supplier'}</span>
    </div>
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
