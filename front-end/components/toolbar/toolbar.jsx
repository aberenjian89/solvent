import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { Button, IconButton } from '../../../node_modules/@material-ui/core';
 

export default class AppToolbar extends React.Component{
  constructor(props){
    super(props)
    this.state = {
        open: false,
        anchorEl: null
    }
    this.handleMenu = this.handleMenu.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  componentWillReceiveProps(nextprops){
    if (nextprops.container.panel_status != this.state.open){
      this.setState({
        open: nextprops.container.panel_status
      })
    }
  }

  handleMenu(event){
    debugger
    this.setState({ anchorEl: event.currentTarget });
  }

  handleClose(){
    this.setState({ anchorEl: null });
  };


  render(){
    const open = Boolean(this.state.anchorEl);
    return(
      <div className="appbar">
        <AppBar color="default" className={!this.state.open ? 'toolbar-close' : 'toolbar-expand' } position="relative">
          <Toolbar>
              <div>
                <IconButton 
                aria-owns={open ? 'toolbar-menu' : undefined}
                aria-haspopup="true"
                onClick={this.handleMenu}>
                Account
                </IconButton>
                <Menu 
                id="toolbar-menu"
                anchorEl={this.state.anchorEl}
                open={open} 
                onClose={this.handleClose}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}>
                  <MenuItem>Profile</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </Menu>
              </div>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}
