import React from 'react';
import { Input } from '../Input/Input.component';

import { IForm } from './Form.component.props';
import { InputProps } from '../Input/Input.component.props';

/** Typescript issue workaround https://github.com/Microsoft/TypeScript/issues/7294#issuecomment-465794460 */
export function elemT<T>(array: T): Array<InputProps<String>> {
  return array as any
}

export const Form = (props: IForm): JSX.Element => {
  const { inputs, onsubmit, onchange, onclick, ...rest } = {
    ...props,
  };
  console.log(inputs)

  const handleClick = onclick || ((event) => {
    event.preventDefault();
    console.log('Clicked');
    console.log(event.target);
  })

  const handleChange = onchange || ((event) => {
    event.preventDefault();
    console.log('Updated');
    console.log(event.target);
  })

  const handleSubmit = onsubmit || ((event) => {
    console.log('Submitted');
    console.log(event.target);
  })
  
  return (
    <form onSubmit={handleSubmit} {...rest}>
      {(inputs && Array.isArray(inputs))? elemT(inputs).map(({type, value, variable, ...rest}: InputProps<String>, key: number) => (
        <Input onChange={handleChange} onClick={(type === 'button') ? handleClick : ()=>({})} key={key} type={type} value={value} variable={variable} {...rest} />
      )) : null}
      {handleChange? null : <input type="submit" value="Update" />}
    </form>
  );
};