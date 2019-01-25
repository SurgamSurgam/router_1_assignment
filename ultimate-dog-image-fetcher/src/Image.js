import React from "react";
import { withRouter } from 'react-router';

const Image = (props) => {
  let { imageUrl, addFavImage, favsList, savedComment, handleComments, savingCommmentOnImage } = props;

  let mappedImageUrl;

  if (props.match.params.id && imageUrl===undefined) {
    //handles display of single image when Zoomed in/ clicked on on favorites...
    //HELPS distinguish between params of random:id and favorites:id
    mappedImageUrl = favsList.map((fav) => {
      // console.log('FAV-ID', fav.id, "PARAMS", props.match.params);
      if (fav.id === props.match.params.id) {
        let stylingComment = fav.comments.map(comment => <li>{comment}</li>);
        return(
            <div className='singleFavorite' key={fav.id}>
              <img src={fav.imageUrl} id={fav.id} alt=''/>
              <br/>
              <form onSubmit={(e)=>savingCommmentOnImage(fav.id, e)}>
                <input type='text' value={savedComment} onChange={handleComments}/>
                <input type='submit'/>
              </form>
              <ul className={fav.comments.length > 0 ? 'comments' : ''}>{stylingComment}</ul>
            </div>
        )
      }
    })
  } else if (props.match.params.id && imageUrl.length){
  //handles dropdown selection of multiple images to distinguish between favorites
  mappedImageUrl = imageUrl.map((image, i) => {
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
