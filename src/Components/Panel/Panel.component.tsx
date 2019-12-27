

// Panel Page to include 2 ItemsBox, 1 ItemEditor and 1 ModeSwitch Component

import {css} from 'emotion';
import React, {useCallback}  from 'react';
import {IState, useMappedState} from '../../Redux/Store';

import PanelBox from '../PanelBox/PanelBox.component';
import ModeSwitch from '../ModeSwitch/ModeSwitch';

export default function Panel() {
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
        <PanelBox variable={mode? 'chef':'storeman'}/>
        <ModeSwitch />
      </div>
    );
  }
  
  const styles = {
    root: css`
      font-size: 12px;
    `,
  };