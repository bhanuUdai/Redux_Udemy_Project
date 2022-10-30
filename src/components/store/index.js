import { createStore } from "redux";
import { createSlice,configureStore } from "@reduxjs/toolkit";
const counterState={ count: 0 ,showCounter:true};

const counterSlice=createSlice({
  name:'counter',
  initialState:counterState,
  reducers:{
    increment(state){
      state.count++
    },
    decrement(state){
      state.count--
    },
    increase(state,action){
      state.count=state.count+action.payload
    },
    toggleCount(state){
      state.showCounter=!state.showCounter
    },
    incrementby2(state){
      state.count=state.count+2
    },
    deccrementby2(state)
    {
      state.count=state.count-3
    },
    incrementby5(state)
    {
      state.count=state.count+5
    },
    deccrementby5(state)
    {
      state.count=state.count-5
    }

  }
});

const authInitialState={login:false}

const authslice= createSlice({
  name:'auth',
  initialState:authInitialState,
  reducers:{
    isLogin(state)
  {
    state.login=true;
  },
  isLogout(state)
  {
    state.login=false;
  }
  }
  
})


const store = configureStore({
  reducer:{counter:counterSlice.reducer,auth:authslice.reducer}
})

export const authActions=authslice.actions;
export const counterActions=counterSlice.actions;
export default store;






















// const counterReducer = (state = initialState, action) => {
//   if (action.type === "increment") {
//     return {
//       count: state.count + 1,
//       showCounter:state.showCounter
//     };
//   }
//   if (action.type === "decrement") {
//     return {
//       count: state.count - 1,
//       showCounter:state.showCounter
//     };
//   }
  
//   if(action.type==='incrementby2')
//   {
//     return {count:state.count+2,showCounter:state.showCounter}
    
//   }
//   if(action.type==='deccrementby2')
//   {
//     return {count:state.count-2,showCounter:state.showCounter}
//   }
//   if(action.type==='incrementby5')
//   {
//     return {count:state.count+5,showCounter:state.showCounter}
//   }
//   if(action.type==='deccrementby5')
//   {
//     return {count:state.count-5,showCounter:state.showCounter}
//   }
//   if(action.type==='increase')
//   {
//     return {count:state.count+action.amount,showCounter:state.showCounter}
//   }
//   if(action.type==='togglecounter')
//   {
//     return{
//       count:state.count,
//       showCounter:!state.showCounter
//     }
//   }

//   else {
//     return state;
//   }
// };
