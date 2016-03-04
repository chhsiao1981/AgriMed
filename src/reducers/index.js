import { combineReducers } from 'redux';
import app from './App';
import step2 from './Step2';
import step3 from './Step3';

const rootReducer = combineReducers({
  app,
  step2,
  step3,
});

export default rootReducer;
