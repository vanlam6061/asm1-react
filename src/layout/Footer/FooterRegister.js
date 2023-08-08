import classNames from "classnames/bind";

import styles from "./FooterRegister.module.scss";

const cx = classNames.bind(styles);
function FooterRegister() {
  return (
    <div className={cx("_wrapper")}>
      <div className={cx("_container")}>
        <p className={cx("_footer--title")}>Save time, save money!</p>
        <p className={cx("_footer--text")}>
          Sign up and we'll send the best deals to you
        </p>
        <div className={cx("container__register")}>
          <input
            type="text"
            className={cx("_input")}
            placeholder="  Your Email"
          />
          <button className={`button ${cx("_button")}`}>Subcribe</button>
        </div>
      </div>
    </div>
  );
}
export default FooterRegister;
