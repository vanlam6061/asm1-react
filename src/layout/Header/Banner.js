import styles from "./Banner.module.scss";

import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Banner() {
  return (
    <div className="wrapper">
      <h1> A lifetime of discounts? It's Genius.</h1>
      <p>
        Get rewarded for your travels - unlock instant savings of 10% or more
        with a free account
      </p>
      <button type="button" className={cx("button", "bannerHome__Button")}>
        Sign in/ Register
      </button>
    </div>
  );
}

export default Banner;
