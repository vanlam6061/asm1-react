import styles from "./SearchContent.module.scss";

import classNames from "classnames/bind";
import data from "../../data/search.json";

const cx = classNames.bind(styles);

function SearchContent() {
  return (
    <div className={cx("cards", "_wrapper")}>
      {data.map((card, index) => (
        <div className={cx("_card")} key={index}>
          <div className={cx("_box-img")}>
            <img src={card.image_url} className={cx("_card-img")} />
          </div>
          <div className={cx("_box-content")}>
            <p className={cx("_card-title")}>{card.name}</p>
            <p className={cx("_card-distance")}>{card.distance} from center</p>
            <p className={cx("_card-tag")}>{card.tag}</p>
            <p className={cx("_card-description")}>{card.description}</p>
            <p className={cx("_card-type")}>{card.type}</p>
            <div className={cx("_card-free-cancel")}>
              {card.free_cancel && (
                <div>
                  <p>Free cancellation</p>
                  <p className={cx("_cancel-note")}>
                    You can cancel later so look great price today!
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className={cx("_box-right")}>
            <div className={cx("_rate")}>
              <p className={cx("_card-rate--text")}>{card.rate_text}</p>
              <p className={cx("_card-rate")}>{card.rate}</p>
            </div>
            <div className={cx("_price")}>
              <p className={cx("_card-price")}>${card.price}</p>
              <p className={cx("_card-price--text")}>includes taxes and fees</p>
              <button className={cx("button-1", "_button")}>
                See availability
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default SearchContent;
