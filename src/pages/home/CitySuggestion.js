import styles from "./CitySuggestion.module.scss";

import classNames from "classnames/bind";
import data from "../../data/city.json";
const cx = classNames.bind(styles);

function CitySuggestion() {
  return (
    <div className={cx("cards", "_container")}>
      {data.map((card, index) => (
        <div className={cx("_card")} key={index}>
          <img src={card.image} alt="img" className={cx("_card-image")} />
          <div className={cx("_card-content")}>
            <p className={cx("_card-title")}>{card.name}</p>
            <p className={cx("_card-subText")}>{card.subText}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
export default CitySuggestion;
