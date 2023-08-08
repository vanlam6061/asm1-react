import React from "react";
import { useState } from "react";
import classNames from "classnames/bind";
import styles from "./SearchBar.module.scss";
import Calendar from "../../components/Calendar";

const cx = classNames.bind(styles);

function SearchBar() {
  const [calendarIsShow, setCalendarIsShow] = useState(false);
  const showCalendarHandler = () => {
    setCalendarIsShow(true);
  };
  const hideCalendarHandler = () => {
    setCalendarIsShow(false);
  };

  return (
    <div className={cx("fa", "_wrapper")}>
      <div className={cx("_container")}>
        <input
          type="text"
          className={cx("fa", "fa-bed", "_input")}
          placeholder="&#xf236; Where are you going ?"
        ></input>
      </div>
      <div className={cx("_container")}>
        <input
          type="text"
          className={cx("fa", "fa-bed", "_input")}
          onClick={showCalendarHandler}
          placeholder="&#xf073; 06/24/2022 to 06/24/2022"
        ></input>
        <div>
          {calendarIsShow && <Calendar onClose={hideCalendarHandler} />}
        </div>
      </div>
      <div className={cx("_container")}>
        <i className={cx("_search--icon")}></i>
        <input
          type="text"
          className={cx("fa", "fa-bed", "_input")}
          placeholder="&#xf183; 1 adult &middot; 0 chidren &middot; 1room"
        ></input>
      </div>
      <button
        className={cx("button-1", "_button")}
        onClick={() => window.location.replace("/search")}
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
