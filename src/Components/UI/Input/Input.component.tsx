import React, { useState, useEffect } from 'react';
import { styles } from './Input.component.style';
import { InputProps, InputPropsConcrete, inputPropsDefault } from '../Input/Input.component.props';

import useReduxFormEvents from '../../../Hooks/UseReduxFormEvents/UseReduxFormEvents.hook';

export const Input = (props: InputProps<String>): JSX.Element | null => {
  const {index, name, type, value, variable, dispatchAction, ...rest }: InputPropsConcrete = {
    ...inputPropsDefault,
    ...props
  };

  const [attrValue, setAttrValue] = useState(value)
  const {onchange, onclick} = useReduxFormEvents({type: dispatchAction || 'default', index, name});

  const handleChange = (type !== 'button') ? (e: React.SyntheticEvent<HTMLInputElement, Event>) => {
    setAttrValue((e.target as HTMLInputElement).value);
    if(index) onchange(e as React.ChangeEvent<HTMLInputElement>);
  } : () => null

  useEffect(() => {
    setAttrValue(value);
  }, [value])

  return (
    (type === 'button'&&!index) ? null : <input onClick={(type === 'button')? onclick : () => null} onChange={handleChange} className={styles[variable || 'base']} {...{type, name , value: attrValue}} {...rest} />
  );
};
