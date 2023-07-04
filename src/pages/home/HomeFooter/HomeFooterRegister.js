import classNames from "classnames/bind";

import styles from "../../../components/scss/home/HomeFooter/HomeFooterRegister.module.scss";

const cx = classNames.bind(styles);

function HomeFooterRegister() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <p classNames={cx("homeFooter--title")}>Save time, save money!</p>
        <p>Sign up and we'll send the best deals to you</p>
        <div classNames={cx("homeFooter__container")}>
          <input
            type="text"
            classNames={cx("homeFooter__input")}
            placeholder="Your Email"
          />
          <button classNames={cx("button", "homeFooter__button")}>
            Subcribe
          </button>
        </div>
      </div>
    </div>
  );
}
export default HomeFooterRegister;
