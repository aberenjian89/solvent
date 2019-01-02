import {connect} from 'react-redux';
import Navigation from './navigation';
import { navigation_changed } from '../../actions/container_actions'

const mapStateToProps = (state)=>({

})

const mapDispatchToProps = dispatch =>(
  {
    toggleStatus: (status,class_name) => dispatch(navigation_changed(status,class_name))
  }
)

export default connect(
  null,
  mapDispatchToProps
)(Navigation)