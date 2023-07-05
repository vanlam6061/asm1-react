import styles from ' ../../../components/scss/search/SearchForm.module.scss'

import classNames from ' classnames/bind'

const cx = classNames.bind(styles)

function SearchForm (){
    return(
        <div classNames ={cx('container', 'SearchForm__wrapper')} >
        <h3>Search</h3>
        <label>Destination</label>
        <input type ="text" classNames ={cx('container', 'SearchForm__input')} placeholder ="" />
        <label>Check-in Date</label>
        <input type ="text" classNames ={cx('container', 'SearchForm__input')} placeholder ="" />
        <label>Options</label>
        <div classNames= {cx('SearchForm__container')}>
            <div>
                <label>Min price per night</label>
                <label>Max price per night</label>
                <label>Adult</label>
                <label>Children</label>
                <label>Room</label>
            </div>
            <div>
            <input type ="text" classNames ={cx('container', 'option__input')}></input>
            <input type ="text" classNames ={cx('container', 'option__input')}></input>
            <input type ="text" classNames ={cx('container', 'option__input')}></input>
            <input type ="text" classNames ={cx('container', 'option__input')}></input>
            <input type ="text" classNames ={cx('container', 'option__input')}></input>
            </div>
        </div>
        <button type ="submit" classNames ={cx('button', 'SearchForm__sumbmit')} >Search</button>
    </div>
    )
}
export default SearchForm