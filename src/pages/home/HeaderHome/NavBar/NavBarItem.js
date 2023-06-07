import React, { useState } from "react";
import styles from "./NavBarItem.module.scss";

function NavBarItem(props) {
  return (
    <div key={props.key} className={styles.navBar_item} active={props.active}>
      <i className={`fa ${props.icon} ${styles.nav_icon}`}></i>
      {props.type}
    </div>
  );
}

export default NavBarItem;
console.log(NavBarItem);
