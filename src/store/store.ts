import { createStore, applyMiddleware, compose, Middleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './root-reducer';

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

function configureStore(initialState?: {}) {
  console.log('Configuring store');
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(
      applyMiddleware(thunk)
    )
  );
}

// pass an optional param to rehydrate state on app start
const store = configureStore();

// export store singleton instance
export default store;
