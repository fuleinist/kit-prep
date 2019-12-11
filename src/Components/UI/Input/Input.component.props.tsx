export type InputProps<T> = {
  type?: string;
  value?: string | number;
  placeholder?: string;
  variable?: string;
}

export type InputPropsConcrete = InputProps<string> & InputPropsDefault;

export interface InputPropsDefault {}

export const inputPropsDefault: InputPropsDefault = {
  type: 'text',
  value: '',
  variable: 'base'
}