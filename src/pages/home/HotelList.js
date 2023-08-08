import classNames from "classnames/bind";

import styles from "./HotelList.module.scss";

import data from "../../data/hotel_list.json";

const cx = classNames.bind(styles);

function HotelList() {
  return (
    <div>
      <h2 className={cx("heading-secondary")}>Home guests love</h2>
      <div className={`cards ${cx("_container")}`}>
        {data.map((card, index) => (
          <div
            className={`card ${cx("_card")}`}
            key={index}
            onClick={() => window.location.replace("/detail")}
          >
            <img src={card.image_url} className={cx("_card-image")} />
            <div className={`card__content ${cx("_card-content")}`}>
              <p className={cx("card_title")}>{card.name}</p>
              <p className={cx("car_city")}>{card.city}</p>
              <p className={cx("card__price")}>Starting from ${card.price}</p>
              <p className={cx("card__type")}>
                <span className={cx("card__rate")}>{card.rate}</span>
                {card.type}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default HotelList;
