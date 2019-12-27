import {css} from 'emotion';
import React from 'react';
import { Input } from '../UI/Input/Input.component';

const actionInput = (actionName: string) => 
  {
    const result = {
      type: 'button',
      name: actionName,
      value: actionName || '',
      dispatchAction: `${actionName}`,
      variable: 'base'
    }
    return result;
  };

export default function ActionButton({actionName, ...rest}: any): JSX.Element {
  const inputProps = actionInput(actionName);

  return (
    <div className={styles.root}>
      <Input {...inputProps} {...rest} />
    </div>
  );
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