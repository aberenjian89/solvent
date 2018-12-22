import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Navigation from './navigation/navigation';
import AppToolbar from './toolbar/toolbar'

export default class App extends React.Component{
  constructor(props){
    super(props)
  }


  render(){
    return(
      <div>
        <CssBaseline/>
        <AppToolbar/>
        <Navigation/>
      </div>
    )
  }
}