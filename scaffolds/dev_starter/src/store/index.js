import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from '../reducers';
import api from '../middlewares/api'

const logger = createLogger({
  level: 'info',
  collapsed: false
});

const { devTools, persistState } = require('redux-devtools');

var finalCreateStore = compose(
  applyMiddleware(
    thunk,
    api,
    logger,
  ),
)(createStore);

export default function configureStore(initialState) {
  const store = finalCreateStore(rootReducer, initialState);

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
