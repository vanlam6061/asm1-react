import styles from "../../../components/scss/home/BannerHome.module.scss";

import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function BannerHome() {
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

export default BannerHome;
