import React from "react";
import styles from "./index.module.scss";
import { ImageData } from "../../types";

export const FileInput = ({
  onImageUpload,
}: {
  onImageUpload: (imageData: ImageData) => void;
}) => {
  const handleInputChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { files } = event.target;
      if (files) {
        let img = new Image();
        var objectUrl = URL.createObjectURL(files[0]);
        img.src = objectUrl;
        img.onload = function () {
          onImageUpload({
            name: files[0].name,
            url: objectUrl,
            size: { width: img.width, height: img.height },
          });
        };
      }
    },
    [onImageUpload]
  );

  return (
    <label className={styles.root}>
      Upload image
      <input
        className={styles.input}
        type="file"
        name="myImage"
        onChange={handleInputChange}
      />
    </label>
  );
};
