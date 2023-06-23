import styles from "../../../components/scss/home/HomeFooter/HomeFooterLinkTable.module.scss";
import footer from "../../../data/footer.json";

import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function HomeFooterLinkTable() {
  return console.log(footer[0]);
}
export default HomeFooterLinkTable;
