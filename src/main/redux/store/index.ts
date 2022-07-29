import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducer from '../reducers'
import appSaga from '../sagas'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducer,
  undefined,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(appSaga)

export { store }
