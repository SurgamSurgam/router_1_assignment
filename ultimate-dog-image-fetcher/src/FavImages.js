import React from "react";
// import { Route, Switch } from "react-router-dom";
import { withRouter } from 'react-router';


const FavImages = (props) => {
  const {favsList} = props;

  let getClickedImage = e => {
    props.history.push("/favorites/" + e.target.id);
  };

  let mappedFavsList = favsList.map((fav) => {
      return(
        <div className='favImgDiv' key={fav.id}>
          <img src={fav.imageUrl} onClick={getClickedImage} id={fav.id} alt=''/>

        </div>
      )
    })

    return (
       <div className='parentFavImgDiv'>
        {mappedFavsList}
         {/*<Switch>*/}
           {/*<Route exact path="/favorites" render={mappedFavsList} />*/}
           {/*<Route path="/favorites/:id" component={Image} />*/}
           {/*<Route path="/favorites/:id" render={} />*/}
         {/*</Switch>*/}
       </div>
     )

};

export default withRouter(FavImages)
