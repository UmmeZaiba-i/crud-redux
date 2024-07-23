import { useSelector, useDispatch } from "react-redux"
import { actions } from "../reducer/CounterSlice";

export default function Counter() {
    const counter = useSelector((state:any)=>state.counter);
    const dispatch = useDispatch();
    const increment = ()=>{
        // dispatch({type:'INC'});
        dispatch(actions.increment(''));
        
    }
    const decrement = ()=>{
        dispatch(actions.decrement(''));
    }
    const addby = ()=>{
        dispatch(actions.addBy(10));
    }

  return (
    <div>
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={addby}>Add By</button>
    </div>
  )
}
