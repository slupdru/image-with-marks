import React from "react";
import { ImagePage } from "../components/ImagePage";
import { ImageData } from "../types";
import { FileInput } from "../components/FileInput";
import styles from "./index.module.scss";

function App() {
  const [imageData, setImageData] = React.useState<ImageData>();
  const handleImageUpload = React.useCallback((imageData: ImageData) => {
    setImageData(imageData);
  }, []);

  return (
    <div className={styles.root}>
      {imageData ? (
        <ImagePage {...imageData} />
      ) : (
        <FileInput onImageUpload={handleImageUpload} />
      )}
    </div>
  );
}

export default App;
