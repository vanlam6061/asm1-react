import React from "react";
import classNames from "classnames/bind";

import SearchDate from "./SearchDate";

import styles from "../../../components/scss/home/HomeHeader/SearchHome.module.scss";

const cx = classNames.bind(styles);

function SearchHome() {
  return (
    <div className={cx("headerHome__search--wrapper")}>
      <div className={cx("headerHome__search--container")}>
        <i className={cx("headerHome__search--icon")}></i>
        <input
          type="text"
          className={cx("fa", "fa-bed", "headerHome__search--input")}
          placeholder="Where are you going ?"
        ></input>
      </div>

      <div className={cx("headerHome__search--container")}>
        <i className={cx("headerHome__search--icon")}></i>
        <input
          type="text"
          className={cx("fa", "fa-bed", "headerHome__search--input")}
          placeholder="Where are you going ?"
        ></input>
      </div>
      <button className={cx("headerHome__search--button")}>Search</button>
    </div>
  );
}

export default SearchHome;
