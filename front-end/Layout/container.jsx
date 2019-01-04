import React from 'react'
import Home from '../components/home/home'


export default class Container extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      panel_status : false 
    }
  }

  componentWillReceiveProps(nextprops){
    if (nextprops.status != this.state.panel_status){
      this.setState({
        panel_status: nextprops.status
      })
    }
  }

  render(){
    return (
      <div className={ !this.state.panel_status ? 'main-container-close' : 'main-container-open' }>
          <Home/>
      </div>
    )
  }
}