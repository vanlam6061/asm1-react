import React, { useState } from "react";
import classNames from "classnames/bind";

import MenuHome from "./MenuHome";
import NavBar from "./NavBar";
import BannerHome from "./BannerHome";
import SearchHome from "./SearchHome";

import styles from "../../../components/scss/home/HeaderHome.module.scss";
// import "../../../components/GlobalStyles/GlobalStyles.scss";

const cx = classNames.bind(styles);

function HeaderHome() {
  return (
    <div className={cx("wrapper__headerHome")}>
      <div className={cx("container")}>
        <MenuHome />
        <NavBar />
        <BannerHome />
        <SearchHome />
      </div>
    </div>
  );
}

export default HeaderHome;
