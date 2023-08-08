import className from "classnames/bind";
import styles from "./DetailContent.module.scss";
import data from "../../data/detail.json";

const cx = className.bind(styles);
function DetailContent() {
  return (
    <div className={cx("container", "_wrapper")}>
      <div className={cx("_box-top")}>
        <div className={cx("_top-content")}>
          <h3 className={cx("_name")}>{data.name}</h3>
          <p className={cx("_address")}>
            <i className={cx("fa", "fa-location-dot")}></i> {data.address}
          </p>
          <p className={cx("_distance")}>{data.distance}</p>
          <p className={cx("_price")}>{data.price}</p>
        </div>
        <div className={cx("_top-button")}>
          <button className={cx("button-1", "_button")}>
            Reserve or Book Now!
          </button>
        </div>
      </div>
      <div className={cx("_box-imgs")}>
        {data.photos.map((photo, index) => (
          <div className={cx("_box-img")}>
            <img key={index} src={photo} className={cx("_img")} />
          </div>
        ))}
      </div>
      <div className={cx("_box-bottom")}>
        <div className={cx("_box-bottom--content")}>
          <h3 className={cx("_box-bottom--title")}>{data.title}</h3>
          <p className={cx("_box-bottom--description")}>{data.description}</p>
        </div>
        <div className={cx("_box-bottom--reserve")}>
          <h3 className={cx("_reserve-title")}>Perfect for a 9-night stay!</h3>
          <p>
            Located in the real heart of Krakow. This property has excellent
            location score of 9.8!
          </p>
          <p className={cx("_reserve-price")}>
            ${data.nine_night_price}
            <span style={{ fontWeight: "300" }}>(9 nights)</span>
          </p>
          <button className={cx("button-1", "_button")}>
            Reserve or Book Now!
          </button>
        </div>
      </div>
    </div>
  );
}
export default DetailContent;
