import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <ul className={styles.container}>
          <li className={styles.navElement}>
            <Link className={styles.link}  to="/" >
              Home
            </Link>
          </li>
          <li className={styles.navElement}>
            <Link className={styles.link} to="/dishes" >
              Dishes
            </Link>
          </li>
          <li className={styles.navElement}>
            <Link className={styles.link} to="/order">
              Order
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
