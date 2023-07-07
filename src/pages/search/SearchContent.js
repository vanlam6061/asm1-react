import styles from "../../components/scss/search/SearchContent.module.scss";

import classNames from "classnames/bind";
import data from "../../data/search.json";

const cx = classNames.bind(styles);

function SearchContent() {
  return (
    <div classNames={cx("container", "SearchContent__container")}>
      {data.map((card, index) => (
        <div classNames={cx("HomeContentPropertyType__card")} key={index}>
          <img url={card.image} classNames={cx("card__img")} />
          <div>
            <p classNames={cx("card__title")}>{card.name}</p>
            <p classNames={cx("card__.distance")}>{card.distance}from center</p>
            <p classNames={cx("card__tag")}>{card.tag}</p>
            <p classNames={cx("card__description")}>{card.description}</p>
            <p classNames={cx("card__type")}>{card.type}</p>
            <div classNames={cx("card__free_cancel")}>
              {card.free_cancel}
              <p>You can cancel later so look greate price today!</p>
            </div>
          </div>
          <div>
            <p classNames={cx("card__rate_text")}>
              {card.rate_text}
              <span classNames={cx("card__rate_text")}></span>
            </p>
            <p classNames={cx("card__price")}>${card.price}</p>
            <p classNames={cx("card__price--text")}>includes taxes and fees</p>
            <button classNames={cx("card__btn")}>See availability</button>
          </div>
        </div>
      ))}
    </div>
  );
}
export default SearchContent;
