import { combineReducers } from 'redux';
import ContainerReducer from './container_reducer'
const rootReducer = combineReducers({
  Container: ContainerReducer,
});

export default rootReducer;