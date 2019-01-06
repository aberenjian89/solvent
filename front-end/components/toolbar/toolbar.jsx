import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
 

const toolbar_style = {
  display: 'flex',
}

export default class AppToolbar extends React.Component{
  constructor(props){
    super(props)
    this.state = {
        open: false
    }
  }

  componentWillReceiveProps(nextprops){
    if (nextprops.container.panel_status != this.state.open){
      this.setState({
        open: nextprops.container.panel_status
      })
    }
  }

  render(){
    return(
      <div className="appbar">
        <AppBar color="default" className={!this.state.open ? 'toolbar-close' : 'toolbar-expand' }>
          <Toolbar>
            <div style={toolbar_style}>
              <Button>
                  Account
              </Button>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}
