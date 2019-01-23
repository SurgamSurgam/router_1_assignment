import React from "react";

export const Image = ({ imageUrl }) => {
  let mappedImageUrl = imageUrl.map((image, i) => {
    return <img src={image} alt="" key={i} />;
  });
  return (
    <>
      <div className="imageDiv">{mappedImageUrl}</div>
    </>
  );
};
