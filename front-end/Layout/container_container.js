import {connect} from 'react-redux'
import Container from './container';


const mapStateToProps = (state) =>({
  status: state.Container.panel_status 
})

const mapDispatchToProps = null;


export default connect(mapStateToProps,null)(Container)


