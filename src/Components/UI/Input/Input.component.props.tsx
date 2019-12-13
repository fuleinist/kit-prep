export type InputProps<T> = {
  dispatchAction: string;
  type?: string;
  name?: string;
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