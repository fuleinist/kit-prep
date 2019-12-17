import React from 'react'
import {useDispatch} from '../../Redux/Store'

const useFormEvents = ({type, ...rest}: {type: string, index?: number, [key: string]: any}) => {
  const dispatch = useDispatch();
  const reduxDispatch = (f: Function, d: Object): void => { if(!!type) { f(d); } else { console.log('Missing index & type, check setup')} }
  const onchange = (event: React.ChangeEvent<HTMLInputElement>) => {
    reduxDispatch(dispatch, {type, value: event.target.value, ...rest})
  };
  const onclick = (event: React.MouseEvent<HTMLInputElement>) => {
    reduxDispatch(dispatch, {type, ...rest})
  };
  const onsubmit = (data: Object) => {
    reduxDispatch(dispatch, {type, ...data, ...rest})
  };
  return { onsubmit, onchange, onclick };
}

export default useFormEvents;