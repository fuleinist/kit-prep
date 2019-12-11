import React, { SyntheticEvent } from 'react';
import { styles } from './Input.component.style';
import { InputProps, inputPropsDefault } from '../Input/Input.component.props';

export const Input = (props: InputProps<String>): JSX.Element => {
  const {type, value, variable, ...rest } = {
    ...inputPropsDefault,
    ...props
  };

  return (
    <input className={styles.root[variable || 'base']} {...{type, value, rest}} />
  );
};