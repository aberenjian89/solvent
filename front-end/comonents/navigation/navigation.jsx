import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Divider from '@material-ui/core/Divider';
import navigation_container from './navigation_container'

class Navigation extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      open: false,
      class: 'container-close'
    }
    this.switchpanelstatus = this.switchpanelstatus.bind(this)
    this.closerender = this.closerender.bind(this)
    this.openrender = this.openrender.bind(this)
  }

  componentDidMount(){
    debugger
    this.props.toggleStatus(this.state.open,this.state.class)
  }

  switchpanelstatus(e){
    let status;
    let class_name;
    if (this.state.open){

      status = false
      class_name = 'container-close'
    }else{
      status = true,
      class_name = 'container-open'
    }
    return this.setState({
      open: status,
      class: class_name
    })
  }
  closerender(){
    return (
      <div>
        <div className="nav-switch-section-close">
          <i onClick={()=> this.switchpanelstatus()} className="fas fa-bars"></i>
        </div>
        <Divider/>
        <div className="nav-logo-container">
          <i className="fab fa-pied-piper"></i>
        </div>
        <Divider/>
      </div>
    )
  }

  openrender(){
    return (
      <div>
        <div className="nav-logo-container-open">
          <span>Name</span>
          <i onClick={()=> this.switchpanelstatus()} className="fas fa-bars"></i>
        </div>
       <Divider/>
      </div>
    )
  }

  render(){
    let final_render;
    if (this.state.open){
      final_render = this.openrender()
    }else{
      final_render = this.closerender()
    }
    return (
      <div className="navigation">
        <AppBar className={this.state.class} color="default">
            {final_render}
        </AppBar>
      </div>
    )
  }
}


export default Navigation