import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Navigation from './navigation/navigation_container';
import AppToolbar from './toolbar/toolbar_container'
import Home from './home/home'
import Container from '../Layout/container_container';

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
        <Container/>
      </div>
    )
  }
}