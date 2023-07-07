import styles from "../../components/scss/home/HomeContent/HomeContent.module.scss";
import HomeContentGuestLove from "../home/HomeContent/HomeContentGuestLove";
import HomeContentPropertyType from "../home/HomeContent/HomeContentPropertyType";
import HomeContentSuggestion from "../home/HomeContent/HomeContentSuggestion";

import classNames from "classnames/bind";
const cx = classNames.bind(styles);

function HomeContent() {
  return (
    <div>
      <HomeContentGuestLove />
      <HomeContentPropertyType />
      <HomeContentSuggestion />
    </div>
  );
}
export default HomeContent;
