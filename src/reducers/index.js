import { combineReducers } from 'redux';
import app from './App';
import step2 from './Step2';

const rootReducer = combineReducers({
  app,
  step2,
});

export default rootReducer;
