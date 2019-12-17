import React from 'react'
import {useDispatch} from '../../Redux/Store'

type UseReduxFormEvents = {
  type: string, 
  index?: number,
  // https://nathanbirrell.me/notes/typescript-accept-any-prop/
  [x: string]: any
}

const useReduxFormEvents = ({type, index, ...rest}: UseReduxFormEvents) => {
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

export default useReduxFormEvents;