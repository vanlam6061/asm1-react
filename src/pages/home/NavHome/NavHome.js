import React, { useState } from "react";
import classNames from "classnames/bind";

import MenuHome from "./MenuHome/MenuHome";
import NavBar from "./NavBar/NavBar";

import styles from "./Nav.module.scss";

const cx = classNames.bind(styles);

function HeaderHome() {
  return (
    <div className={cx("wrapper__headerHome")}>
      <MenuHome />
      <NavBar />
    </div>
  );
}

export default HeaderHome;
