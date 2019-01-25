import React from "react";
import axios from "axios";
import Image  from "./Image.js";
import { withRouter } from "react-router";
import { SelectDrop } from "./SelectDrop.js";

class RandomImg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: [],
      pickedNum: null,
      initImgTracker: false
    };
  }

  componentDidMount() {
    this.getFetchDogs();
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    if (!this.props.match.params.id && prevProps.match.params.id) {
      this.getFetchDogs();
    }
  }

  getFetchDogs = () => {
    axios
      .get(
        `https://dog.ceo/api/breeds/image/random/${
          this.props.match.params.id ? +this.props.match.params.id : 1
        }`
      )
      .then(response => {
        this.updateRequestedImg(response);
      })
      .catch(err => {
        console.log("Get Random Dog ERROR", err);
      });
  };

  updateRequestedImg = response => {
    this.setState({
      imageUrl: response.data.message
    });
  };

  getPickedNumImages = e => {
    e.persist();
    axios
      .get(`https://dog.ceo/api/breeds/image/random/${+e.target.value}`)
      .then(response => {
        this.props.history.push("/random/" + +e.target.value);
        this.updateRequestedImg(response);
      })
      .catch(err => {
        console.log("Get Random Dog ERROR", err);
      });
  };

  render() {
    let { imageUrl } = this.state;
    console.log('randomIMG', this.state);

    return (
      <>
        <h1>Random Dogs HERE</h1>
        <div className="selectButtonDiv">
          <button onClick={this.getFetchDogs}>Get Random Dog IMG</button>
          <SelectDrop getPickedNumImages={this.getPickedNumImages} />
        </div>
        <br />
        <Image
          imageUrl={imageUrl}
          addFavImage={this.props.addFavImage}
          favsList={this.props.favsList}
        />
      </>
    );
  }
}

export default withRouter(RandomImg);
