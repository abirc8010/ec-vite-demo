import React from "react";
import styles from "./Navbar.module.css";
import logo from "../../assets/header_logo.svg";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div>
        <img src={logo} className={styles.logo} alt="Rocket.Chat" />
      </div>
    </div>
  );
};

export default Navbar;
