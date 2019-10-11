import React from 'react';
import './App.css';

import NavBar from './components/NavBar'

export default class App extends React.Component{
  constructor(props){
    super()
    this.state = {
      logged : false
    }
  }
  
  render(){
    return (
      <div >
        <NavBar />

      </div>

    );
  }
}


