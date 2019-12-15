import { SyntheticEvent, ChangeEvent, MouseEvent} from 'react';
import { InputProps } from '../Input/Input.component.props';

export interface IForm {
  inputs: InputProps<String>[] | [],
  onsubmit?: (event: SyntheticEvent<EventTarget>) => void, 
  onchange?: ((dispatchEvent: string) => (event: ChangeEvent<HTMLInputElement>) => void), 
  onclick?: ((dispatchEvent: string) => (event: MouseEvent<HTMLInputElement>) => void)
}