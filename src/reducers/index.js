import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import layers from './layers'
import ranger from './ranger'
import counter from './counter'
import filters from './filters'

export default combineReducers({
  router: routerReducer,
  layers,
  filters,
  ranger,
  counter
})
