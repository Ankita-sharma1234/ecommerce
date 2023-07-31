// import { configureStore } from "@reduxjs/toolkit";
// import { applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';

// import  userReducer  from "./features/sellerSlice";

// const store = configureStore({
//     reducer: {
//         emp: userReducer
//     }
// })
// export default store;


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
// import thunk from 'redux-thunk';
// import userReducer from "./features/sellerSlice"; // Your combined reducers

// // Custom middleware for logging and other purposes (if needed)
// const customMiddleware = store => next => action => {
//     // Your custom middleware logic goes here
//     console.log('Dispatching:', action);
//     return next(action);
// };

// const store = configureStore({
//     reducer: {
//         emp: userReducer 
//     },
//     middleware: [
//         ...applyMiddleware(),
//         thunk,
//         customMiddleware 
//     ]
// });

// export default store;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/sellerSlice"; 


const store = configureStore({
  reducer: {
      emp: userReducer
  }
})

export default store;

