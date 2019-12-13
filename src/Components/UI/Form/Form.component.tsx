import React from 'react';
import { Input } from '../Input/Input.component';

import { IForm } from './Form.component.props';
import { InputProps } from '../Input/Input.component.props';

/** Typescript issue workaround https://github.com/Microsoft/TypeScript/issues/7294#issuecomment-465794460 */
export function elemT<T>(array: T): Array<InputProps<String>> {
  return array as any
}

export const Form = (props: IForm): JSX.Element => {
  const { index, inputs, onsubmit, onchange, onclick, ...rest } = {
    ...props,
  };

  const handleSubmit = onsubmit || ((event) => {
    console.log('Submitted');
    console.log(event.target);
  })
  
  return (
    <form onSubmit={handleSubmit} {...rest}>
      {(inputs && Array.isArray(inputs))? elemT(inputs).map(({type, name, value, variable, dispatchAction, ...rest}: InputProps<String>, key: number) => (
        <Input index={index} key={key} name={name} type={type} value={value} variable={variable} dispatchAction={dispatchAction} {...rest} />
      )) : null}
    </form>
  );
};