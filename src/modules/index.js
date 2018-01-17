import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import layers from './layers'
import ranger from './ranger'
import counter from './counter'

export default combineReducers({
  router: routerReducer,
  layers,
  ranger,
  counter
})
