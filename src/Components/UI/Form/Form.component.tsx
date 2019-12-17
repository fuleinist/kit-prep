import React from 'react';

import useReduxFormEvents from '../../../Hooks/UseReduxFormEvents/UseReduxFormEvents.hook';
import { Input } from '../Input/Input.component';
import { IForm } from './Form.component.props';
import { InputProps } from '../Input/Input.component.props';

/** Typescript issue workaround https://github.com/Microsoft/TypeScript/issues/7294#issuecomment-465794460 */
export function elemT<T>(array: T): Array<InputProps<String>> {
  return array as any
}

export const Form = (props: IForm): JSX.Element => {
  const { index, name, inputs, onchange, onclick, ...rest } = {
    ...props,
  };

  const { onsubmit } = useReduxFormEvents({type: `add ${name}` || 'default', name});

  const handleSubmit = !index ? ((event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    let result: Object = {};
    result[name] = {};
    for(var pair of formData.entries()) {
      result[name][pair[0]] = pair[1];
    }
    onsubmit(result);
  }) : () => console.log;
  
  return (
    <form onSubmit={handleSubmit} {...rest}>
      {(inputs && Array.isArray(inputs))? elemT(inputs).map(({type, name, value, variable, dispatchAction, ...rest}: InputProps<String>, key: number) => (
        <Input index={index} key={key} name={name} type={type} value={value} variable={variable} dispatchAction={dispatchAction} {...rest} />
      )) : null}
      {!index? <input type="submit" value="Add" /> : null}
    </form>
  );
};