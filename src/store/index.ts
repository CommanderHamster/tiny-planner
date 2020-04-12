import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { reducer as formReducer } from 'redux-form'
import { composeWithDevTools } from "redux-devtools-extension";
import logger from 'redux-logger'
import sagas from './sagas/index'
// import { systemReducer } from "./system/reducers";
// import { chatReducer } from "./chat/reducers";
const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
  // system: systemReducer,
  // chat: chatReducer
  form: formReducer
});

export type AppState = ReturnType<typeof rootReducer>

export default function configureStore() {
  const middleware = [sagaMiddleware, logger]
  const middleWareEnhancer = applyMiddleware(...middleware)

  const store = createStore(
    rootReducer,
    composeWithDevTools(middleWareEnhancer)
  );

  sagaMiddleware.run(sagas)

  return store
}
