import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./NavBarItem.module.scss";

const cx = classNames.bind(styles);

function NavBarItem(props) {
  return (
    <div
      key={props.key}
      className={cx("nav__item", { "nav__item--active": props.active })}
      active={props.active}
    >
      <i className={`fa ${props.icon} ${cx("nav__icon")}`}></i>
      {props.type}
    </div>
  );
}

export default NavBarItem;
