import React from "react";
import Carousel from "nuka-carousel";

const ImageGallery = ({ imgArray }) => {
  return (
    <Carousel
      wrapAround={true}
      enableKeyboardControls={true}
      heightMode={"first"}
    >
      {imgArray.map(link => (
        <img src={link ? link : ""} key={link} alt="" />
      ))}
    </Carousel>
  );
};

export default ImageGallery;
