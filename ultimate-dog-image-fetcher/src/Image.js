import React from "react";
import { withRouter } from 'react-router';

const Image = (props) => {
  let { imageUrl, addFavImage, favsList } = props;

  let mappedImageUrl;

  if (props.match.params.id && imageUrl===undefined) {
    //handles display of single image when Zoomed in/ clicked on on favorites...
    //HELPS distinguish between params of random:id and favorites:id
    console.log(props.match.params);
    mappedImageUrl = favsList.map((fav) => {
      debugger
      console.log('FAV-ID', fav.id, "PARAMS", props.match.params);
      if (fav.id === props.match.params.id) {
        return(
          <div className='singleFavorite' key={fav.id}>
            <img src={fav.imageUrl} id={fav.id} alt=''/>
          </div>
        )
      }
    })
  } else if (props.match.params.id && imageUrl.length){
  //handles dropdown selection of multiple images to distinguish between favorites
  mappedImageUrl = imageUrl.map((image, i) => {
    console.log(props.match.params);
    debugger;
    return (
      <div className='imageAndButtonDiv' key={i}>
        <img src={image} alt="" key={i} />
        <br/>
        <button onClick={()=>addFavImage(image)}>Favorite Me</button>
      </div>
    );
  });
} else {
  // handles all regular images display single or multiple
  mappedImageUrl = imageUrl.map((image, i) => {
    console.log(props.match.params);
    debugger;
    return (
      <div className='imageAndButtonDiv' key={i}>
        <img src={image} alt="" key={i} />
        <br/>
        <button onClick={()=>addFavImage(image)}>Favorite Me</button>
      </div>
    );
  });
}

  return (
    <>
      <div className="imageDiv">{mappedImageUrl}</div>
    </>
  );
};

export default withRouter(Image)
