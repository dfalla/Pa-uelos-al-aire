import { configureStore } from '@reduxjs/toolkit';
import purchaseReducer from './purchase/reducer';
import studentsReducer from './students/reducer';
import authReducer from './auth/reducer';

const store = configureStore({
  reducer: {
    purchase: purchaseReducer,
    students: studentsReducer,
    auth: authReducer
  }
});

export default store;



// import { createStore, combineReducers, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import { purchaseReducer } from './purchase/reducer';

// const reducers = combineReducers({
//     purchase: purchaseReducer,
// });

// const store = createStore(reducers, applyMiddleware(thunk));

// export default store;