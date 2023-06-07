import NavBar from "./NavBar/NavBar";
import styles from "./HeaderHome.module.scss";
import React, { useState } from "react";

function HeaderHome() {
  return (
    <div className={styles.container_header_home}>
      <NavBar />
    </div>
  );
}

export default HeaderHome;
