import styles from "../../../components/scss/home/HomeFooter/HomeFooterLinkTable.module.scss";
import footer from "../../../data/footer.json";

import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function HomeFooterLinkTable() {
  return (
    <div>
      {
        footer.map(column => {
          <ul key ={column.col_number}>
            {column.col_values.map(item =>{
              <li>item</li>
            })}
          </ul>
  
  
        })
      }
    </div>
  )
}
export default HomeFooterLinkTable;
