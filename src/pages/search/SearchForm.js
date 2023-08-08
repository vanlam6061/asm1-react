import { useState } from "react";
import { addDays } from "date-fns";
import { DateRangePicker } from "react-date-range";

import classNames from "classnames/bind";

import styles from "./SearchForm.module.scss";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css"; // theme css file
const cx = classNames.bind(styles);

function SearchForm() {
  const [date, setDate] = useState(false);
  function clickDateHandler() {
    setDate(!date);
  }

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
    <div className={cx("_wrapper")}>
      <h3>Search</h3>
      <label className={cx("label", "_label-primary")}>Destination</label>
      <input type="text" className={cx("_input-primary")} placeholder="" />
      <label className={cx("label", "_label-primary")}>Check-in Date</label>
      <input
        onClick={clickDateHandler}
        type="text"
        className={cx("_input-primary")}
        placeholder=""
      />
      <div>
        {date && (
          <DateRangePicker
            className={cx("_date-picker")}
            onChange={(item) => setState({ ...state, ...item })}
            months={1}
            minDate={addDays(new Date(), -300)}
            maxDate={addDays(new Date(), 900)}
            direction="vertical"
            scroll={{ enabled: true }}
            ranges={[state.selection, state.compare]}
          />
        )}
      </div>
      <label className={cx("label", "_label")}>Options</label>
      <div className={cx("_container")}>
        <div className={cx("_box-label")}>
          <label className={cx("label", "_label")}>Min price per night</label>
          <label className={cx("label", "_label")}>Max price per night</label>
          <label className={cx("label", "_label")}>Adult</label>
          <label className={cx("label", "_label")}>Children</label>
          <label className={cx("label", "_label")}>Room</label>
        </div>
        <div className={cx("_box-input")}>
          <input type="text" className={cx("_input")}></input>
          <input type="text" className={cx("_input")}></input>

          <input type="text" className={cx("_input")}></input>
          <input type="text" className={cx("_input")}></input>
          <input type="text" className={cx("_input")}></input>
        </div>
      </div>
      <button type="submit" className={cx("button-1", "_submit")}>
        Search
      </button>
    </div>
  );
}
export default SearchForm;
