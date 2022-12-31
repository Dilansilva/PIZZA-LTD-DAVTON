import React,{useState} from 'react';
import {useSelector,useDispatch} from "react-redux"

function App() {
  const counter = useSelector(state => state.counter);
  const [value,setValue] = useState(0);
  const dispatch = useDispatch();
  const increment = () => {
    dispatch({type:'INCREMENT'});
  }

  const decrement = () => {
    dispatch({type : 'DECREMENT'});
  }

  const increaseByNum = () => {
    dispatch({type: 'INCBYNUM',payload:value});
  }
  return (
    <div>
      <h1>Hello World</h1>
      {counter}<br/><br/>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={increaseByNum}>Increment By Number</button>
      <input onChange={(e) => setValue(e.target.value)}/>
    </div>
  );
}

export default App;
