<<<<<<< HEAD
import { createStore, combineReducers } from "redux";
import { planReducer, } from "./data";

const rootReducer = combineReducers({
    data: planReducer,
}) 

const store = createStore(rootReducer);
=======
import { createStore, combineReducers } from 'redux'

import { reducer } from './data'

const rootReducer = combineReducers({
    data: reducer
})
const store = createStore(rootReducer);

>>>>>>> 7a6ed498a0b81bf904c19d664cbc073b777228c7
export default store;