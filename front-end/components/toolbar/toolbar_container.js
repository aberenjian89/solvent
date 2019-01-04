import {connect} from 'react-redux';
import AppToolbar from './toolbar'

const mapStateToProps = (state)=>( {
  container: state.Container
  
})


const mapDispatchToProps = dispatch =>({
  
})

export default connect(mapStateToProps,mapDispatchToProps)(AppToolbar)