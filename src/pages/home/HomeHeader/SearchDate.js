import React, { useState } from "react";
import { DateRangePicker } from "react-date-range";
import { addDays } from "date-fns";
import classNames from "classnames/bind";

import styles from "../../../components/scss/home/HomeHeader/SearchDate.module.scss";

const cx = classNames.bind(styles);

function SearchDate() {
  const [state, setState] = useState({
    selection: {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
    compare: {
      startDate: new Date(),
      endDate: addDays(new Date(), 3),
      key: "compare",
    },
  });
  return (
    <div className={cx("headerHome__search--container")}>
      <i className={cx("headerHome__search--icon")}></i>
      <input
        type="text"
        className={cx("fa", "fa-bed", "headerHome__search--input")}
        placeholder="Where are you going ?"
      ></input>
      <DateRangePicker
        onChange={(item) => setState({ ...state, ...item })}
        months={1}
        minDate={addDays(new Date(), -300)}
        maxDate={addDays(new Date(), 900)}
        direction="vertical"
        scroll={{ enabled: true }}
        ranges={[state.selection, state.compare]}
      />
    </div>
  );
}
export default SearchDate;
