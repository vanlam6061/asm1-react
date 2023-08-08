import styles from "./PropertyType.module.scss";
import classNames from "classnames/bind";
import data from "../../data/type.json";

const cx = classNames.bind(styles);

function PropertyType() {
  return (
    <div>
      <h2 className={cx("heading-secondary")}>Browse by property type</h2>
      <div className={cx("cards", "_container", "_cards")}>
        {data.map((card, index) => (
          <div className={cx("_card")} key={index}>
            <img src={card.image} className={cx("_card-image")} />
            <p className={cx("_card__title")}>{card.name}</p>
            <p className={cx("_card__count")}>{card.count} hotels</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default PropertyType;
