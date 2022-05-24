import { MarkData } from "../../../types";
import styles from "./index.module.scss";

export const Mark = ({ topPercent, leftPercent, text }: MarkData) => {
  return (
    <div
      className={styles.root}
      style={makeMarkStyles(topPercent, leftPercent)}
    >
      {text}
    </div>
  );
};

export const makeMarkStyles = (
  topPercent: number,
  leftPercent: number
): React.CSSProperties => {
  return {
    top: `${topPercent}%`,
    left: `${leftPercent}%`,
  };
};
