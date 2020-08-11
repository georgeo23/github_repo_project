import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { gitHubReducer } from './reducers/';

const store = createStore(gitHubReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;