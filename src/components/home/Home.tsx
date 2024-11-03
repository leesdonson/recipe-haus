import { Link } from "react-router-dom";
import styles from "./home.module.css";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section className={styles.container}>
      <div className={styles.top}>
        <motion.h1
          initial={{ y: -1000 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 40 }}
          className={styles.heading}
        >
          Find New Recipe everyday
        </motion.h1>
      </div>
      <div className={styles.bottom}>
        <motion.button
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 40 }}
          className={styles.btn}
        >
          <Link to={"/discover-profile"}>About us</Link>
          <span className={styles.spans}></span>
        </motion.button>
        <motion.button
          initial={{ x: 1000 }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 40 }}
          className={styles.btn}
        >
          <Link to={"/recepies"}>View Recipes</Link>
          <span className={styles.spans}></span>
        </motion.button>
      </div>
    </section>
  );
};

export default Home;
