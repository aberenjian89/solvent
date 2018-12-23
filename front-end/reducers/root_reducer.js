import { combineReducers } from 'redux';
import ContainerReducer from './container_reducer'
const rootReducer = combineReducers({
  conatiner: ContainerReducer,
});

export default rootReducer;