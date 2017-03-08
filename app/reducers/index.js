// @flow
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import installer_reducer from './installer_reducer'

const rootReducer = combineReducers({
  installer_reducer,
  routing
});

export default rootReducer;
