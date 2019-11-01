import React from 'react';
import './App.css';

import {BrowserRouter as Router,Route,Switch} from "react-router-dom"; 

import NavBar from './components/NavBar'
import Recipes from './components/Recipes.component'
import Landing from './components/Landing.component'
import About from './components/About.component'
import Login from './components/Login.component'

export default class App extends React.Component{

  constructor(props){
    super()
    this.state = {
      logged : false
    }
  }
  
  render(){
    return (
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <Landing />
            </Route>
            <Route path="/recipes">
              <Recipes />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
        </Router> 
    );
  }
}


