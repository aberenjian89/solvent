import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import { Menu,MenuItem } from '@material-ui/core';

 

const toolbar_style = {
  display: 'flex',
  justifyContent: 'flex-end',
  paddingRight: '0',
}

const toolbar_button = {
  minHeight: '60px',
  minWidth: '130px',
  borderRadius: '0'
}

const menu_style = {
  top: '48px',
  left: '0',
  right: '0'
}



class AppToolbar extends React.Component{
  constructor(props){
    super(props)
    this.state = {
        open: false,
        anchorEl: null
    }
    this.handleClose = this.handleClose.bind(this)
    this.handleOpen = this.handleOpen.bind(this)
  }

  componentWillReceiveProps(nextprops){
    if (nextprops.container.panel_status != this.state.open){
      this.setState({
        open: nextprops.container.panel_status
      })
    }
  }

  handleOpen(event){
    this.setState({
      anchorEl: event.currentTarget
    })
  }

  handleClose(){
    this.setState({
      anchorEl: null
    })
  }

  render(){
    const {anchorEl} = this.state
    return(
      <div className="appbar">
        <AppBar color="default" className={!this.state.open ? 'toolbar-close' : 'toolbar-expand' }>
          <Toolbar style={toolbar_style}>
            <div>
              <Button
                aria-owns={anchorEl ? 'open-menu' : undefined }
                aria-haspopup="true"
                style={toolbar_button}
                onClick={this.handleOpen}>
                  Account
              </Button>
              <Menu
                id="open-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                style={menu_style}
                onClose={this.handleClose}>
                <MenuItem>Settings</MenuItem>
                <MenuItem>Logout</MenuItem>
              </Menu>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}


export default AppToolbar;

