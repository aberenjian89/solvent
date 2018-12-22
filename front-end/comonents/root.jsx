import React from 'react';
import App from './app';

class Root extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>
        <App/>
      </div>
    )
  }
}

export default Root;