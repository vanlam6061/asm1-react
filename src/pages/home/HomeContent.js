import classNames from "classnames/bind";

import styles from "./HomeContent.module.scss";
import HotelList from "./HotelList";
import PropertyType from "./PropertyType";
import CitySuggestion from "./CitySuggestion";
import SearchBar from "./SearchBar";

const cx = classNames.bind(styles);

function HomeContent() {
  return (
    <div className={cx("container", "_container")}>
      <SearchBar />
      <CitySuggestion />
      <PropertyType />
      <HotelList />
    </div>
  );
}
export default HomeContent;
