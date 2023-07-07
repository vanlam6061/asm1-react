import styles from "../../components/scss/detail/DetailContent.module.scss";
import className from "classnames/bind";
import data from "../../data/detail.json";

const cx = className.bind(styles);
function DetailContent() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("detail__Container--top")}>
        <div>
          <h3>{data.name}</h3>
          <div>
            <i></i> {data.address}
          </div>
          <p>{data.distance}</p>
          <p>{data.price}</p>
        </div>
        <button className={cx("button")}>Reserve or Book Now!</button>
      </div>
      <div className={cx("detail__container--img")}>
        {data.photos.map((photo, index) => (
          <img key={index} src={photo} />
        ))}
      </div>
      <div className={cx("detail__Container--bottom")}>
        <div>
          <h3>{data.title}</h3>
          <p>{data.description}</p>
        </div>
        <div>
          <h3>Perfect for a 9-night stay!</h3>
          <p>
            Located in the real heart of Krakow. This property has excellent
            location score of 9.8!
          </p>
          <p>
            ${data.nine_night_price}
            <span>(9 nights)</span>
          </p>
          <button className={cx("button")}>Reserve or Book Now!</button>
        </div>
      </div>
    </div>
  );
}
export default DetailContent;
