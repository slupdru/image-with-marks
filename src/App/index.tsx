import React from "react";
import { ImagePage } from "../components/ImagePage";
import { ImageData } from "../types";
import { FileInput } from "../components/FileInput";
import styles from "./index.module.scss";
import { CloseButton } from "../components/CloseButton";

export const App = () => {
  const [imageData, setImageData] = React.useState<ImageData>();
  const handleImageUpload = React.useCallback((imageData: ImageData) => {
    setImageData(imageData);
  }, []);
  const handleClose = React.useCallback(() => {
    setImageData(undefined);
  }, []);

  return (
    <div className={styles.root}>
      {imageData ? (
        <>
          <CloseButton onClick={handleClose} />
          <ImagePage {...imageData} />
        </>
      ) : (
        <FileInput onImageUpload={handleImageUpload} />
      )}
    </div>
  );
};
