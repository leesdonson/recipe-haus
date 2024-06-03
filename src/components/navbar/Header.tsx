import { Link } from "react-router-dom";
import styles from "./header.module.css";
import SearchBar from "./Searchbar";

const Header = () => {
  return (
    <section className={styles.container}>
      <div className={styles.logo_box}>
        <Link to="/">
          <h1 className={styles.logo_text}>Recipe Haus</h1>
        </Link>
      </div>
      <SearchBar />
    </section>
  );
};

export default Header;
