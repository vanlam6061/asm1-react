import React, { useState } from "react";
import styles from "./NavBar.module.scss";
import NavBarItem from "./NavBarItem";

const items = [
  { key: "01", type: "Stays", icon: "fa-bed", active: true },
  { key: "02", type: "Flights", icon: "fa-plane", active: false },
  { key: "03", type: "Car rentals", icon: "fa-car", active: false },
  { key: "04", type: "Attractions", icon: "fa-bed", active: false },
  { key: "05", type: "Airport taxis", icon: "fa-taxi", active: false },
];

function NavBar() {
  return (
    <nav className={styles.nav_containter}>
      {items.map((item) => (
        <NavBarItem
          key={item.key}
          type={item.type}
          icon={item.icon}
          active={item.active}
        />
      ))}
    </nav>
  );
}

export default NavBar;
