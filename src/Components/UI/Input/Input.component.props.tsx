import { ChangeEvent, MouseEvent } from 'react'

export type InputProps<T> = {
  type?: string;
  name: string;
  value?: string | number;
  placeholder?: string;
  variable?: string;
  dispatchAction?: string;
  onChange?: ((event: ChangeEvent<HTMLInputElement>) => void);
  onClick?: ((event: MouseEvent<HTMLInputElement>) => void);
}

export type InputPropsConcrete = InputProps<string> & InputPropsDefault;

export interface InputPropsDefault {}

export const inputPropsDefault: InputPropsDefault = {
  type: 'text',
  value: '',
  variable: 'base'
}