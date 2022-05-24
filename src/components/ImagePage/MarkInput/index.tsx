import React from "react";
import { MarkData } from "../../../types";
import { makeMarkStyles } from "../Mark";
import styles from "./index.module.scss";

export const MarkInput = ({
  text,
  onChange,
  topPercent,
  leftPercent,
}: MarkData & { onChange: (text: string) => void }) => {
  const handleChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange(e.target.value);
    },
    [onChange]
  );

  return (
    <input
      autoFocus
      className={styles.root}
      style={makeMarkStyles(topPercent, leftPercent)}
      value={text}
      onChange={handleChange}
    />
  );
};
