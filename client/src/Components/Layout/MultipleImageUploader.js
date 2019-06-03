import React from "react";
import ImageUploader from "react-images-upload";

const MultipleImageUploader = ({ setImages }) => {
  return (
    <ImageUploader
      buttonText="Resim Ekle"
      onChange={setImages}
      imgExtension={[".jpg", ".png"]}
      fileSizeError="Resim Çok Büyük"
      fileTypeError="Dosya Tipi Desteklenmiyor"
      maxFileSize={5242880}
      withPreview={true}
      withIcon={false}
      label="Lütfen .jpg veya .png uzantılı resimler ekleyiniz.(Max 5mb)"
      buttonStyles={{ backgroundColor: "#429CC1" }}
    />
  );
};

export default MultipleImageUploader;
