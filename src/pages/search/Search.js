
import styles from '../../../components/scss/Search/Search.module.scss'

import SearchContent from './SearchContent'
import SearchForm from './SearchForm'
import HomeHeader from '../home/HomeHeader'
import HomeFooter from '../home/HomeFooter'

import className from 'classnames/bind'


const cx =className.bind(styles)

const Search = () => {
  return (
    <div>
      <HomeHeader />
      <div>
      <SearchForm />
      <SearchContent />
      </div>
      <HomeFooter />
    </div>
  );
};

export default Search;
