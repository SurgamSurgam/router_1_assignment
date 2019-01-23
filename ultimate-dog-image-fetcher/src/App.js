import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Navbar } from "./Navbar.js";
import { Home } from "./Home.js";
import RandomImg from "./RandomImg.js";
import BreedImg from "./BreedImg.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/random" component={RandomImg} />
          <Route exact path="/random/:id" component={RandomImg} />
          <Route exact path="/randomBreed" component={BreedImg} />
          <Route exact path="/*" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
