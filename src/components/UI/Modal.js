import { Fragment } from "react";
import ReactDOM from "react-dom";
import classNames from "classnames/bind";
import styles from "./Modal.module.scss";
const cx = classNames.bind(styles);

function Backdrop(props) {
  return <div className={cx("backdrop")} onClick={props.onClose}></div>;
}
function ModalOverlay(props) {
  return (
    <div className={cx("modal")}>
      <div className={cx("content")}>{props.children}</div>
    </div>
  );
}
const portalElement = document.getElementById("overlays");
function Modal(props) {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
}
export default Modal;
