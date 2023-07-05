import styles from ' ../../../components/scss/search/SearchContent.module.scss'

import classNames from ' classnames/bind'
import data from "../../../data/type.json"

const cx = classNames.bind(styles)

function SearchContent (){
    return(
        <div classNames ={cx('container', 'HomeContentPropertyType__container')} >
        {data.map((card, index) =>(
        <div classNames={cx('HomeContentPropertyType__card')} key={index} >
            <img url ={card.image} classNames ={cx('card__img')} />
            <P classNames ={cx('card__title')}>{card.name}</P>
            <P classNames ={cx('card__count')}>{card.count}</P>

        </div>
        ))
        }
    </div>
    )
}
export default SearchContent