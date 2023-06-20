import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./NavBarItem.module.scss";

const cl = classNames.bind(styles);

function NavBarItem(props) {
  return (
    <div
      key={props.key}
      className={cl("nav__item", { "nav__item--active": props.active })}
      active={props.active}
    >
      <i className={`fa ${props.icon} ${cl("nav__icon")}`}></i>
      {props.type}
    </div>
  );
}

export default NavBarItem;
