import React from "react";
import classNames from "classnames/bind";
import styles from "./MenuHome.module.scss";

const cl = classNames.bind(styles);

function MenuHome() {
  return (
    <div className={cl("menu__wrapper")}>
      <p className={cl("menu__title")}>Booking Website</p>
      <button className={cl("menu__btn")}>Register</button>
      <button className={cl("menu__btn")}>Login</button>
    </div>
  );
}

export default MenuHome;
