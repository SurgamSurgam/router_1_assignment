import React from "react";
import axios from "axios";
import { Image } from "./Image.js";
import { withRouter } from "react-router";
import { SelectDrop } from "./SelectDrop.js";

class RandomImg extends React.Component {
  constructor() {
    super();
    this.state = {
      imageUrl: [],
      pickedNum: null
    };
  }

  componentDidMount = () => {
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
        this.updateRequestedImg(response);
        // setTimeout(() => {
        // debugger;
        this.props.history.push("/random/" + +e.target.value);
        // }, 1000);
      })
      .catch(err => {
        console.log("Get Random Dog ERROR", err);
      });
  };

  render() {
    console.log(this.props);
    let { imageUrl } = this.state;
    let urlDogInput = this.props.match.params.id ? (
      <></>
    ) : (
      <>
        <button onClick={this.componentDidMount}>Get Random Dog IMG</button>
        <SelectDrop getPickedNumImages={this.getPickedNumImages} />
      </>
    );

    return (
      <>
        <h1>Random Dogs HERE</h1>
        <div className="selectButtonDiv">{urlDogInput}</div>
        <br />
        <Image imageUrl={imageUrl} />
      </>
    );
  }
}

export default withRouter(RandomImg);
