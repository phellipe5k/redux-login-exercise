import { createStore, combineReducers } from 'redux';

const mainReducer = combineReducers({

})

const store = createStore(mainReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
