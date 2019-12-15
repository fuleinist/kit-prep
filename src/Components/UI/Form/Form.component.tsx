import React from 'react';
import { Input } from '../Input/Input.component';

import { IForm } from './Form.component.props';
import { InputProps } from '../Input/Input.component.props';

/** Typescript issue workaround https://github.com/Microsoft/TypeScript/issues/7294#issuecomment-465794460 */
export function elemT<T>(array: T): Array<InputProps<String>> {
  return array as any
}

export const Form = (props: IForm): JSX.Element => {
  const { inputs, data, onsubmit, onchange, onclick, ...rest } = {
    ...props,
  };

  const handleSubmit = onsubmit || ((event) => {
    console.log('Submitted');
    console.log(event.target);
  })
  
  return (
    <form onSubmit={handleSubmit} {...rest}>
      {(inputs && Array.isArray(inputs))? elemT(inputs).map(({name, type, value, variable, dispatchAction, ...rest}: InputProps<String>, key: number) => (
        <Input onChange={onchange(dispatchAction)} onClick={(type === 'button') ? onclick(dispatchAction) : ()=>()=>({})} name={name} key={key} type={type} value={data[name] || value} variable={variable} {...rest} />
      )) : null}
      {onchange? null : <input type="submit" value="Update" />}
    </form>
  );
};