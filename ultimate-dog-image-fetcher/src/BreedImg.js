import React from "react";
import axios from "axios";
import  Image  from "./Image.js";
import { withRouter } from 'react-router'

class BreedImg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: [],
      breedList: [],
      breedChoice: null
    };
  }

  componentDidMount() {
    axios
      .get("https://dog.ceo/api/breeds/list/all")
      .then(res => {
        this.setState({
          breedList: res.data.message
        });
      })
      .catch(err => {
        console.log("Get All Breeds ERROR", err);
      });
  }

  updateBreedChoice = e => {
    this.setState({
      breedChoice: e.target.value
    });
  };

  getRandomImgOfBreed = () => {
    axios
      .get(`https://dog.ceo/api/breed/${this.state.breedChoice}/images/random`)
      .then(res => {
        this.updateRequestedImg(res);
      })
      .catch(err => {
        console.log("Get Random Image Of Breed ERROR", err);
      });
  };

  updateRequestedImg = response => {
    this.setState({
      imageUrl: [response.data.message]
    });
  };

  render() {
    console.log(this.props);
    let { imageUrl, breedList } = this.state;

    let allBreeds = Object.keys(breedList).map((breed, i) => {
      return (
        <option value={breed} key={i}>
          {breed}
        </option>
      );
    });

    return (
      <>
        <h1>Choose a Breed</h1>
        <div className="selectButtonDiv">
          <select onChange={this.updateBreedChoice}>
            <option value="null">Pick One</option>
            {allBreeds}
          </select>
          <button onClick={this.getRandomImgOfBreed}>Get Image</button>
        </div>
        <br />
        <Image imageUrl={imageUrl} addFavImage={this.props.addFavImage} favsList={this.props.favsList}/>
      </>
    );
  }
}

export default withRouter(BreedImg);
