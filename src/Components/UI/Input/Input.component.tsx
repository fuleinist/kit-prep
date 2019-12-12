import React from 'react';
import { styles } from './Input.component.style';
import { InputProps, InputPropsConcrete, inputPropsDefault } from '../Input/Input.component.props';

export const Input = (props: InputProps<String>): JSX.Element => {
  const {type, value, variable, onChange, ...rest }: InputPropsConcrete = {
    ...inputPropsDefault,
    ...props
  };

  return (
    <input className={styles.root[variable || 'base']} {...{type, defaultValue: value}} {...rest} />
  );
};