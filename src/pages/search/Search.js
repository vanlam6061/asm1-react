import styles from "./Search.module.scss";

import SearchContent from "./SearchContent";
import SearchForm from "./SearchForm";
import Header from "../../layout/Header/Header";
import Footer from "../../layout/Footer/Footer";

import className from "classnames/bind";

const cx = className.bind(styles);

const Search = () => {
  return (
    <div>
      <Header />
      <div className={cx("container", "_wrapper")}>
        <SearchForm />
        <SearchContent />
      </div>
      <Footer />
    </div>
  );
};

export default Search;
