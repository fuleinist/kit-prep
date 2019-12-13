import React, { useState } from 'react';
import { styles } from './Input.component.style';
import { InputProps, InputPropsConcrete, inputPropsDefault } from '../Input/Input.component.props';

import useReduxFormEvents from '../../../Hooks/UseReduxFormEvents/UseReduxFormEvents.hook';

export const Input = (props: InputProps<String>): JSX.Element => {
  const {index, name, type, value, variable, dispatchAction, ...rest }: InputPropsConcrete = {
    ...inputPropsDefault,
    ...props
  };

  const [attrvalue, setAttrValue] = useState(value)

  const {onchange, onclick} = useReduxFormEvents({type: dispatchAction || 'default', index});

  const handleChange = (type !== 'button') ? (e) => {
    setAttrValue(e.target.value);
    onchange(e);
  } : () => null

  return (
    <input onClick={(type === 'button')? onclick : () => null} onChange={handleChange} className={styles.root[variable || 'base']} {...{type, value: attrvalue}} {...rest} />
  );
};