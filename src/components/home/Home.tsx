import { Link } from "react-router-dom";
import styles from "./home.module.css";

const Home = () => {
  return (
    <section className={styles.container}>
      <div className={styles.top}>
        <h1 className={styles.heading}>Fine New Recipes everyday</h1>
      </div>
      <div className={styles.bottom}>
        <button className={styles.btn}>
          <Link to={"/discover-profile"}> Discover</Link>
          <span className={styles.spans}></span>
        </button>
        <button className={styles.btn}>
          <Link to={"/recepies"}>Browse</Link>
          <span className={styles.spans}></span>
        </button>
      </div>
    </section>
  );
};

export default Home;
