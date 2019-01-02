import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
 

export default class AppToolbar extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>
        <AppBar color="default">
          <Toolbar>

          </Toolbar>
        </AppBar>
      </div>
    )
  }
}
