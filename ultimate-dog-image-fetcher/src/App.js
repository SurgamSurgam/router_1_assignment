import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Navbar } from "./Navbar.js";
import { Home } from "./Home.js";
import RandomImg from "./RandomImg.js";
import BreedImg from "./BreedImg.js";
import FavImages from "./FavImages.js";
import { withRouter } from 'react-router';
import Image from "./Image.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      favsList: []
    };
  }

  addFavImage = url => {
    const { favsList } = this.state;
    const newFavs = favsList.slice(0);
    let id = Math.random().toString(34).slice(2);
    newFavs.push({ imageUrl: url, id: id });

    this.setState({
      favsList: newFavs
    });

  };

  render() {
    let { favsList } = this.state;
    return (
      <div className="App">
        <Navbar />
        <Switch>
          {/*With this order (speficifity on top)I can remove exact.... */}
          <Route exact path="/random/:id" render={ () => <RandomImg addFavImage={this.addFavImage} favsList={favsList} /> } />
          <Route exact path="/random" render={ () => <RandomImg addFavImage={this.addFavImage} favsList={favsList} /> } />
          <Route exact path="/randomBreed" render={ () => <BreedImg addFavImage={this.addFavImage} favsList={favsList} /> } />
          <Route path="/favorites/:id" render={ () => <Image favsList={favsList} /> } />
          <Route path="/favorites" render={ () => <FavImages favsList={favsList} /> } />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
