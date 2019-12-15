export type InputProps<T> = {
  index?: number;
  type?: string;
  name: string;
  value?: string | number;
  placeholder?: string;
  variable?: string;
  dispatchAction?: string;
  onChange?: ((event: React.ChangeEvent<HTMLInputElement>) => void);
  onClick?: ((event: React.MouseEvent<HTMLInputElement>) => void);
}

export type InputPropsConcrete = InputProps<string> & InputPropsDefault;

export interface InputPropsDefault {}

export const inputPropsDefault: InputPropsDefault = {
  type: 'text',
  value: '',
  variable: 'base'
}