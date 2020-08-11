import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { gitHubReducer } from './reducers/';

const store = createStore(gitHubReducer, composeWithDevTools(applyMiddleware()));

export default store;