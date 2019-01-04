import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
 

export default class AppToolbar extends React.Component{
  constructor(props){
    super(props)
    this.state = {
        open: false
    }
  }

  componentWillReceiveProps(nextprops){
    debugger
    if (nextprops.container.panel_status != this.state.open){
      this.setState({
        open: nextprops.container.panel_status
      })
    }
  }

  render(){
    return(
      <div>
        <AppBar color="default" position="relative">
          <Toolbar>

          </Toolbar>
        </AppBar>
      </div>
    )
  }
}
