import classNames from "classnames/bind";

import styles from "../../../components/scss/home/HomeFooter/HomeFooterRegister.module.scss";

const cx = classNames.bind(styles);

function HomeFooterRegister() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <p className={cx("homeFooter--title")}>Save time, save money!</p>
        <p>Sign up and we'll send the best deals to you</p>
        <div className={cx("containeras")}>
          <input
            type="text"
            className={cx("homeFooter__input")}
            placeholder="Your Email"
          />
          <button className={cx("button", "homeFooter__button")}>
            Subcribe
          </button>
        </div>
      </div>
    </div>
  );
}
export default HomeFooterRegister;
