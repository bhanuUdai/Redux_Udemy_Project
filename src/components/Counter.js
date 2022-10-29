import classes from './Counter.module.css';
import { useSelector ,useDispatch} from 'react-redux';
const Counter = () => {

  const count=useSelector(state=>state.count)  // useSelector is hook used to select state in the redux by taking an parameter (here we take state)
  const dispatch=useDispatch()   // here useDispatch is a function and  we are storing it in dispatch variable
  const toggleCounterHandler = () => {};

  const incrementHandler=()=>
  {
    dispatch({type:'increment'})
  }

  const decrementHandler=()=>
  {
    dispatch({type:'decrement'})
  }

  const incrementBy2Handler=()=>
  {
    dispatch({type:'incrementby2'})
  }
  const decrementBy2Handler=()=>
  {
    dispatch({type:'deccrementby2'})
  }

  const incrementBy5Handler=()=>
  {
    dispatch({type:'incrementby5'})
  }

  const decrementBy5Handler=()=>
  {
    dispatch({type:'deccrementby5'})
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{count}</div>
      <div>
        <button onClick={incrementHandler}>increment</button>
        <button onClick={decrementHandler} >decrement</button>
      </div>
      <div>
      <button onClick={incrementBy2Handler}>incrementby2</button>
        <button onClick={decrementBy2Handler} >decrementby2</button>
      </div>
      <div>
      <button onClick={incrementBy5Handler}>incrementby5</button>
        <button onClick={decrementBy5Handler} >decrementby5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
