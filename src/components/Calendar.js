import classNames from "classnames/bind";
import React from "react";
import { useState } from "react";
import { addDays } from "date-fns";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css"; // theme css file
import Modal from "./UI/Modal";
import styles from "./Calendar.module.scss";

const cx = classNames.bind(styles);

function Calendar(props) {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);
  return (
    <Modal onClose={props.onClose}>
      <div onClick={props.onClose}>
        <DateRangePicker
          onChange={(item) => setState([item.selection])}
          showSelectionPreview={true}
          moveRangeOnFirstSelection={false}
          months={2}
          ranges={state}
          direction="horizontal"
          preventSnapRefocus={true}
          calendarFocus="backwards"
        />
      </div>
    </Modal>
  );
}
export default Calendar;
