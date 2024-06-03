import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <p className={styles.copy}>
        All Rights Reserved - Recipe Haus - &copy; 2024
      </p>
    </footer>
  );
};

export default Footer;
