import React from "react";
import classNames from "classnames/bind";
import styles from "./Menu.module.scss";

const cx = classNames.bind(styles);

function Menu() {
  return (
    <div className={cx("menu__wrapper")}>
      <p className={cx("menu__title")}>Booking Website</p>
      <button className={cx("menu__btn")}>Register</button>
      <button className={cx("menu__btn")}>Login</button>
    </div>
  );
}

export default Menu;
