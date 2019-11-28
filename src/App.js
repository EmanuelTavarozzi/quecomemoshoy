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
import CreateRecipe from './components/CreateRecipe.component'
import ScrollToTop from './components/ScrollToTop.component'
import sessionManager from './services/sessionManager'

export default  class App extends React.Component{

  constructor(props){
    super()
    this.sessionManager = new sessionManager() 
    this.state = {
        isLogged: this.sessionManager.isLogged(),  // esto es lo que hay que cambiar desde login para que se cargue la ruta del perfil y el nombre de la persona en la navbar
        username: this.sessionManager.isLogged() ? this.sessionManager.getUserName() : '',
        //isNutricionist: this.sessionManager.isLogged() ? this.sessionManager.getUserType() : ''
        //isNutricionist: this.sessionManager.getUserType()
    }

    console.log("test")
    console.log(this.state.isNutricionist)
    this.logout = this.logout.bind(this)
    this.updateUser = this.updateUser.bind(this)

  }
  
  logout(){
    this.sessionManager.logout()
        this.setState({
            isLogged: this.sessionManager.isLogged(),  // esto es lo que hay que cambiar desde login para que se cargue la ruta del perfil y el nombre de la persona en la navbar
            username: this.sessionManager.isLogged() ? this.sessionManager.getUserName() : '',
            //isNutricionist: this.sessionManager.isLogged() ? this.sessionManager.getUserType() : ''
        })
        window.location.pathname = '/'
  }
  updateUser(){
    this.setState({
      isLogged: this.sessionManager.isLogged(),  // esto es lo que hay que cambiar desde login para que se cargue la ruta del perfil y el nombre de la persona en la navbar
      username: this.sessionManager.isLogged() ? this.sessionManager.getUserName() : '',
      isNutricionist: this.sessionManager.isLogged() ? this.sessionManager.getUserType() : ''
  })
  }

  render(){
    return (
        <Router>
          <ScrollToTop />
          <NavBar isLogged={this.state.isLogged} username={this.state.username} isNutricionist={this.state.isNutricionist} logout={this.logout} />
          <Switch>
            <Route exact path="/" >
              <Landing />
            </Route>
            <Route path="/recipes/" component={Recipes}>
            </Route>
            <Route path="/recipe/:id" component={Recipe}>              
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/login">  {/* to do solo si no estaslogueado  */}
              <Login updateUser={this.updateUser}/>
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/createRecipe">
              <CreateRecipe />
            </Route>
            }
          </Switch>
        </Router> 
    );
  }
}

