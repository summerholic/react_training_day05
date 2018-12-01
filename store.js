
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { routerReducer } from 'react-router-redux';
import thunk from 'redux-thunk';
import userListReducer from './reducers/userListReducer';
import itemListReducer from './reducers/itemListReducer';
import userReducer from './reducers/userReducer';

const rootReducer = combineReducers({
  userListState: userListReducer,
  userState: userReducer,
  itemListState: itemListReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk),
  )
);

const {dispatch} = store;
export default store;
export {dispatch}; 
