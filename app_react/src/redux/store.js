import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import salaLayoutReducer from './salaSlice';
export default configureStore({
    reducer: {
        counter: counterReducer,
        salaLayout: salaLayoutReducer
    } 
});