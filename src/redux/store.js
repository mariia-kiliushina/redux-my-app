import { combineReducers, applyMiddleware, legacy_createStore as createStore } from 'redux'
import { incrementScoreReducer, changeNameReducer, requestDataReducer } from './reducers'

import logger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

const rootReducer = combineReducers({
  incrementScore: incrementScoreReducer,
  changeName: changeNameReducer,
  requestData: requestDataReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger))
export default store
