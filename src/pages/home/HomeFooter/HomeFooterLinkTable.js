import styles from "../../../components/scss/home/HomeFooter/HomeFooterLinkTable.module.scss";
import data from "../../../data/footer.json";

import classNames from "classnames/bind";

const cx = classNames.bind(styles);
function HomeFooterLinkTable() {
  return (
    <div className={cx("wrapper")}>
      {data.map((column) => (
        <div key={column.col_number}>
          {column.col_values.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </div>
      ))}
    </div>
  );
}
export default HomeFooterLinkTable;
