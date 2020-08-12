import React from "react";
import "./styles/App.css";
import { Switch, Route } from 'react-router-dom'
import Welcome from './Page/welcome'
import Search from './Page/search'
import NavBar from './Components/NavBar.js';
// import Result from './Components/Result.js'

class App extends React.Component {
  render() {
    return (
      <div id="app">
      
        <NavBar />
          <Switch>
            <Route exact path='/' component = { Welcome } />
            <Route path='/search' component = { Search } />
          </Switch>
      </div>
    );
  }
}
export default App;
