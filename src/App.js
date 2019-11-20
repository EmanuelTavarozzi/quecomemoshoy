import React from 'react';
import './App.css';

import {BrowserRouter as Router,Route,Switch} from "react-router-dom"; 

import NavBar from './components/NavBar'
import Recipes from './components/Recipes.component'
import Landing from './components/Landing.component'
import About from './components/About.component'
import Login from './components/Login.component'
import Profile from './components/Profile.component'
import Recipe from './components/Recipes/Recipe.component'

export default class App extends React.Component{

  constructor(props){
    super()
  }
  
  render(){
    return (
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/" >
              <Landing />
            </Route>
            <Route path="/recipes/" component={Recipes}>
            </Route>
            <Route path="/recipes/:id">
              <Recipe />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/recipe">
              <Recipe />
            </Route>
            }
          </Switch>
        </Router> 
    );
  }
}


