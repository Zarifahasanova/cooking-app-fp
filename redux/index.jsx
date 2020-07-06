import { createStore, combineReducers } from 'redux'

import { reducer } from './data'

const rootReducer = combineReducers({
    data: reducer
})
const store = createStore(rootReducer);

export default store;