import {connect} from 'react-redux';
import AppToolbar from './toolbar'

const mapStateToProps = (state)=>{
  return {
  status: container.status
  }
}


const mapDispatchToProps = dispatch =>({

})

export default connect(mapStateToProps,mapDispatchToProps)(AppToolbar)