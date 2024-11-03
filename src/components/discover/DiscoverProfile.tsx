import { Link } from "react-router-dom";
import styles from "./dpStyles.module.css";

const DiscoverProfile = () => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.box}>
          <h1 className={styles.heading}>Hi</h1>
          <span className={styles.hi}>👋</span>
        </div>
        <h1 className={`${styles.heading} ${styles.gradient}`}>
          I'm Lee Donson
        </h1>
        <Link
          className={styles.leedonson}
          to="https://donsonlee.vercel.app"
          target="_blank"
        >
          Find out more about me
        </Link>

        <p className={styles.desc}>
          I am a software developer based in Port Moresby. I am the core founder
          of{" "}
          <Link
            className={styles.krintifalab}
            target="_blank"
            to="https://krintifalab.com"
          >
            Krintifa Lab{" "}
          </Link>
          , which is a web develpment agency in Papua New Guinea.
        </p>
        <p className={styles.desc}>
          We create visual appealing and stunning websites. We create digital
          experience for real people like you.
        </p>
      </div>
    </section>
  );
};

export default DiscoverProfile;
