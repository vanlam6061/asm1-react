import styles from "../../../components/scss/home/HomeContent/HomeContentGuestLove.module.scss";

import classNames from "classnames/bind";
import data from "../../../data/hotel_list.json";

const cx = classNames.bind(styles);

function HomeContentGuestLove() {
  return (
    <div classNames={cx("container", "HomeContentGuestLove__container")}>
      {data.map((card, index) => (
        <div classNames={cx("HomeContentGuestLove__card")} key={index}>
          <img url={card.image_url} classNames={cx("card__img")} />
          <p classNames={cx("card__title")}>{card.name}</p>
          <p classNames={cx("card__city")}>{card.city}</p>
          <p classNames={cx("card__price")}>{card.price}</p>
          <p classNames={cx("card__type")}>
            <span classNames={cx("card__rate")}>{card.rate}</span>
            {card.type}
          </p>
        </div>
      ))}
    </div>
  );
}
export default HomeContentGuestLove;
