import { createStore, combineReducers } from "redux";
import { planReducer, } from "./data";

const rootReducer = combineReducers({
    data: planReducer,
}) 

const store = createStore(rootReducer);
export default store;