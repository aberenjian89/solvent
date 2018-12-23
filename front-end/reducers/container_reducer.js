import { NAVIGATION_CHANGED } from '../actions/container_actions'

import {merge} from 'lodash/merge'

const ContainerReducer = (state={},action)=>{
  Object.freeze(state);
  
  switch(action.type){
    case NAVIGATION_CHANGED:
      let nextState = {};
      nextState[nav-panel] = action.status
      return merge({},state,nextState)
    default:
      return state
  }
}

export default ContainerReducer;