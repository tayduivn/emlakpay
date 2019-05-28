import React from "react";
import Carousel from "nuka-carousel";

const ImageGallery = ({ imgArray }) => {
  return (
    <Carousel
      wrapAround={true}
      enableKeyboardControls={true}
      heightMode={"max"}
    >
      {imgArray.map(link => (
        <img src={link} />
      ))}
    </Carousel>
  );
};

export default ImageGallery;
