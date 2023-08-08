import React, { useState } from "react";
import classNames from "classnames/bind";

import Menu from "./Menu";
import NavBar from "./NavBar";
import Banner from "./Banner";

import styles from "./Header.module.scss";

const cx = classNames.bind(styles);

function Header() {
  return (
    <div className={cx("wrapper__HomeHeader")}>
      <div className={cx("container")}>
        <Menu />
        <NavBar />
        <Banner />
      </div>
    </div>
  );
}

export default Header;
