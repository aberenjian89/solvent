import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import { Menu,MenuItem } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

 

const toolbar_style = {
  display: 'flex',
  justifyContent: 'flex-end'
}

const styles = theme =>({
  root:{
    top: '64px',
    width: '100px'
  }
})

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
                onClick={this.handleOpen}>
                  Account
              </Button>
              <Menu
                id="open-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={this.handleClose}
                classes ={{root: classes.root}}>
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


export default withStyles(styles)(AppToolbar);

