import styles from "./Detail.module.scss";

import DetailContent from "./DetailContent";
import Header from "../../layout/Header/Header";
import Footer from "../../layout/Footer/Footer";

import className from "classnames/bind";

const cx = className.bind(styles);

const Detail = () => {
  return (
    <div>
      <Header />
      <DetailContent />
      <Footer />
    </div>
  );
};

export default Detail;
