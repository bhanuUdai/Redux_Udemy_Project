import classes from './Counter.module.css';
import { useSelector ,useDispatch} from 'react-redux';
import { counterActions } from './store/count';
const Counter = () => {

  const count=useSelector(state=>state.counter.count)  // useSelector is hook used to select state in the redux by taking an parameter (here we take state)
  
  const toggle=useSelector(state=>state.counter.showCounter)
  
  const dispatch=useDispatch()   // here useDispatch is a function and  we are storing it in dispatch variable
  const toggleCounterHandler = () => 
  {
    //dispatch({type:'togglecounter'})
    dispatch(counterActions.toggleCount())
  };
  const increaseHandler=()=> // passing payload to the action, with type
  {
    //dispatch({type:'increase',amount:10})
    dispatch(counterActions.increase(10)) //{type:'SOME_UNIQUE_INPUT',payload:10}, therefor use payload in place of action in store becsuse in background this payload of action is store like this
  }

  const incrementHandler=()=>
  {
    //dispatch({type:'increment'});
    dispatch(counterActions.increment())
  }

  const decrementHandler=()=>
  {
    //dispatch({type:'decrement'});
    dispatch(counterActions.decrement())
  }

  const incrementBy2Handler=()=>
  {
   // dispatch({type:'incrementby2'})
      dispatch(counterActions.incrementby2())
  }
  const decrementBy2Handler=()=>
  {
   // dispatch({type:'deccrementby2'})
   dispatch(counterActions.deccrementby2())
  }

  const incrementBy5Handler=()=>
  {
    //dispatch({type:'incrementby5'})
    dispatch(counterActions.incrementby5())
  }

  const decrementBy5Handler=()=>
  {
    //dispatch({type:'deccrementby5'})
    dispatch(counterActions.deccrementby5())
  }

  

console.log(toggle)

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {toggle && <div className={classes.value}>{count}</div>}
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
      <div>
        <button onClick={increaseHandler} >incrementby10</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
