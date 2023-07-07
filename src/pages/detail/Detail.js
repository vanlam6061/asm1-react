import styles from "../../components/scss/detail/Detail.module.scss";

import DetailContent from "./DetailContent";
import HomeHeader from "../home/HomeHeader";
import HomeFooter from "../home/HomeFooter";

import className from "classnames/bind";

const cx = className.bind(styles);

const Detail = () => {
  return (
    <div>
      <HomeHeader />

      <DetailContent />

      <HomeFooter />
    </div>
  );
};

export default Detail;
