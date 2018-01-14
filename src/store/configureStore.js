import { createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import authReducer from '../reducers/auth'



export default () => {
  const reducers = combineReducers({
    auth: authReducer
  });

  // Store creation
  const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

  return store;
};