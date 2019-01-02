import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Divider from '@material-ui/core/Divider';

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

  componentDidMount(props){
    this.props.toggleStatus(this.state.open,this.state.class)
  }

  componentDidUpdate(props){
    this.props.toggleStatus(this.state.open,this.state.class)
  }

  switchpanelstatus(e){
    
    if (this.state.open){
      this.setState({
        open: false,
        class: 'container-close'
      })
    }else{
      this.setState({
        open: true,
        class: 'container-open'
      })
    }
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