import { SyntheticEvent, ChangeEvent, MouseEvent} from 'react';
import { InputProps } from '../Input/Input.component.props';

export interface IForm {
  inputs: InputProps<String>[] | [],
  onsubmit?: (event: SyntheticEvent<EventTarget>) => void, 
  onchange?: (event: ChangeEvent<HTMLInputElement>) => void, 
  onclick?: (event: MouseEvent<HTMLInputElement>) => void
}