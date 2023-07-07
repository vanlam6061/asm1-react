import styles from "../../../components/scss/home/HomeContent/HomeContentPropertyType.module.scss";

import classNames from "classnames/bind";
import data from "../../../data/type.json";

const cx = classNames.bind(styles);

function HomeContentPropertyType() {
  return (
    <div classNames={cx("container", "HomeContentPropertyType__container")}>
      {data.map((card, index) => (
        <div classNames={cx("HomeContentPropertyType__card")} key={index}>
          <img url={card.image} classNames={cx("card__img")} />
          <p classNames={cx("card__title")}>{card.name}</p>
          <p classNames={cx("card__count")}>{card.count}</p>
        </div>
      ))}
    </div>
  );
}
export default HomeContentPropertyType;
