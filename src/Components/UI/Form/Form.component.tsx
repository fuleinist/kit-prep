import React, { SyntheticEvent } from 'react';
import { Input } from '../Input/Input.component';

import { IForm } from './Form.component.props';
import { TInput } from '../Input/Input.component.props';

/** Type workaround for https://github.com/Microsoft/TypeScript/issues/7294#issuecomment-465794460 */
export function elemT<T>(array: T): Array<TInput> {
  return array as any
}

export const Form = (props: IForm): JSX.Element => {
  const { inputs, ...rest } = {
    ...props,
  };

  const handleChange = (event: SyntheticEvent) => {
    console.log('Changed: ' + event.target);
  }
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    console.log('Submitted: ' + event.target);
  }
  return (
    <form onSubmit={handleSubmit}>
      {(inputs && Array.isArray(inputs))? elemT(inputs).map(({type, value, variable}: TInput, key: number) => (
        <Input key={key} type={type} value={value} variable={variable} />
      )) : null}
    </form>
  );
};