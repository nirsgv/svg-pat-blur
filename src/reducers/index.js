import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import members from './members'
import shifts from './shifts'
import popup from './popup'
import layers from './layers'
import ranger from './ranger'
import counter from './counter'

export default combineReducers({
  router: routerReducer,
  members,
  shifts,
  popup,
  layers,
  ranger,
  counter
})
