import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'
import sagas from './sagas/index'
import rootReducer from './reducers';
const sagaMiddleware = createSagaMiddleware()

// export type AppState = ReturnType<typeof rootReducer>

export default function configureMyStore(): any {
  const middleware = [sagaMiddleware, logger]

  const store = configureStore({
    reducer: rootReducer,
    middleware
  })

  sagaMiddleware.run(sagas)

  return store
}
