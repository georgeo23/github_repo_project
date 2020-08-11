import React from "react";
import "./styles/App.css";
import { Switch, Route } from 'react-router-dom'
import Welcome from './Page/welcome'


class App extends React.Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path='/' component = { Welcome } />
        </Switch>
      </>
    );
  }
}
export default App;
