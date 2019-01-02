import { NAVIGATION_CHANGED } from '../actions/container_actions'

import {merge} from 'lodash/merge'

const ContainerReducer = (state={},action)=>{
  Object.freeze(state);
  
  switch(action.type){
    case NAVIGATION_CHANGED:
      let next_state = {}  
      next_state['panel_status'] = action.status 
      next_state['panel_class'] = action.class_name
      return Object.assign({},state,next_state)
    default:
      return state
  }
}

export default ContainerReducer;