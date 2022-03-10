import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.flex_container}>
      <div className={styles.name}>Name</div>
      <div className={styles.status}>Status</div>
      <div>Access</div>
    </div>
  );
};

export default Header;
