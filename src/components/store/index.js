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
  else {
    return state;
  }
};

const store = createStore(counterReducer);

export default store;
