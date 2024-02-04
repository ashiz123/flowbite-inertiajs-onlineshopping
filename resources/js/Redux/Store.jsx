import { configureStore } from '@reduxjs/toolkit';
import { AuthReducer } from '@/Redux/Reducers/AuthReducer';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import { TestingReducer } from '@/Reducers/TestingReducer';



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = configureStore({
    reducer: {
      auth : AuthReducer
    },
    
});

  
  export default store;