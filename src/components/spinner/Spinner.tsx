import styles from "./styles.module.css";

const Spinner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.spinner}></div>
      </div>
    </div>
  );
};

export default Spinner;
