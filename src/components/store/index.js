import { configureStore } from "@reduxjs/toolkit";
import counterProvider from "./count";
import authProvider from "./auth";

const store = configureStore({
  reducer: { counter: counterProvider, auth: authProvider },
});

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
