import React from "react";
import styles from "./MenuHome.module.scss";

function MenuHome() {
  return (
    <React.Fragment>
      <button className={styles.nav_btn}>Register</button>
      <button className={styles.nav_btn}>Login</button>
      <div>Booking Website</div>
    </React.Fragment>
  );
}

export default MenuHome;
