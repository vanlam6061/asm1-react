import React, { useState } from "react";
import classNames from "classnames/bind";

import MenuHome from "./HomeHeader/MenuHome";
import NavBar from "./HomeHeader/NavBar";
import BannerHome from "./HomeHeader/BannerHome";
import SearchHome from "./HomeHeader/SearchHome";

import styles from "../../components/scss/home/HomeHeader/HomeHeader.module.scss";
// import "../../../components/GlobalStyles/GlobalStyles.scss";

const cx = classNames.bind(styles);

function HomeHeader() {
  return (
    <div className={cx("wrapper__HomeHeader")}>
      <div className={cx("container")}>
        <MenuHome />
        <NavBar />
        <BannerHome />
        <SearchHome />
      </div>
    </div>
  );
}

export default HomeHeader;
