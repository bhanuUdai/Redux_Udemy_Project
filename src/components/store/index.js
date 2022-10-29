import { createStore } from "redux";
const counterReducer = (state = { count: 0 }, action) => {
  if (action.type === "increment") {
    return {
      count: state.count + 1,
    };
  }
  if (action.type === "decrement") {
    return {
      count: state.count - 1,
    };
  }
  
  if(action.type==='incrementby2')
  {
    return {count:state.count+2}
  }
  if(action.type==='deccrementby2')
  {
    return {count:state.count-2}
  }
  if(action.type==='incrementby5')
  {
    return {count:state.count+5}
  }
  if(action.type==='deccrementby5')
  {
    return {count:state.count-5}
  }

  else {
    return state;
  }
};

const store = createStore(counterReducer);

export default store;
