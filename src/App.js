import logo from './logo.svg';
import './App.css';
import {useSelector,useDispatch} from "react-redux"

function App() {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();
  const increment = () => {
    dispatch({type:'INCREMENT'});
  }

  const decrement = () => {
    dispatch({type : 'DECREMENT'});
  }
  return (
    <div>
      <h1>Hello World</h1>
      {counter}<br/><br/>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;
