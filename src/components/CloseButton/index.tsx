import styles from "./index.module.scss";

export const CloseButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button className={styles.root} onClick={onClick}>
      <div className={styles.close} />
    </button>
  );
};
