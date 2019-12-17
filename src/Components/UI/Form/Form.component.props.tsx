import { SyntheticEvent, ChangeEvent, MouseEvent} from 'react';
import { InputProps } from '../Input/Input.component.props';

export interface IForm {
  index?: number,
  inputs: InputProps<String>[] | [],
  onsubmit?: (event: SyntheticEvent<EventTarget>) => void, 
  onchange?: (dispatchAction: string) => (event: ChangeEvent<HTMLInputElement>) => void, 
  onclick?: (dispatchAction: string) => (event: MouseEvent<HTMLInputElement>) => void
}