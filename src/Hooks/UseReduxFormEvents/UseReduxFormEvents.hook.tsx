import React from 'react'
import {useDispatch} from '../../Redux/Store'

const useFormEvents = ({type, index, ...rest}) => {
  const dispatch = useDispatch();
  const onsubmit = () => {};
  const onchange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({type, index, value: event.target.value, ...rest});
  };
  const onclick = (event: React.MouseEvent<HTMLInputElement>) => {
    dispatch({type, index, ...rest});
  };
  return { onsubmit, onchange, onclick };
}

export default useFormEvents;