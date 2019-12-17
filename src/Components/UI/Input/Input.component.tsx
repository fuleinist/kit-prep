import React, { useState, useEffect } from 'react';
import { styles } from './Input.component.style';
import { InputProps, InputPropsConcrete, inputPropsDefault } from '../Input/Input.component.props';

import useReduxFormEvents from '../../../Hooks/UseReduxFormEvents/UseReduxFormEvents.hook';

export const Input = (props: InputProps<String>): JSX.Element => {
  const {index, name, type, value, variable, dispatchAction, ...rest }: InputPropsConcrete = {
    ...inputPropsDefault,
    ...props
  };

  const [attrvalue, setAttrValue] = useState(value)
  const {onchange, onclick} = useReduxFormEvents({type: dispatchAction || 'default', index, name});
  console.log({attrvalue, value})
  const handleChange = (type !== 'button') ? (e: React.ChangeEvent<HTMLInputElement>) => {
    setAttrValue(e.target.value);
    onchange(e);
  } : () => null

  useEffect(() => {
    setAttrValue(value);
  }, [value])

  return (
    <input onClick={(type === 'button')? onclick : () => null} onChange={handleChange} className={styles[variable || 'base']} {...{type, value: attrvalue}} {...rest} />
  );
};
