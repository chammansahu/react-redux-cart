import React from "react";
import { useDispatch } from 'react-redux';
const Items = () => {
    const dispatch = useDispatch();
    const add=()=>dispatch({type:'ADD_ITEM'})
    const remove=()=>dispatch({type:'REMOVE_ITEM'})
  return (
    <div className="item">
      <h3>this is single item</h3>
      <button onClick={add} >add</button>
      <button onClick={remove}>delete</button>
    </div>
  );
};

export default Items;
