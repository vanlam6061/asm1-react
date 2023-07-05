import styles from ' ../../../components/scss/search/SearchContent.module.scss'

import classNames from ' classnames/bind'
import data from "../../../data/search.json"

const cx = classNames.bind(styles)

function SearchContent (){
    return(
        <div classNames ={cx('container', 'SearchContent__container')} >
        {data.map((card, index) =>(
        <div classNames={cx('HomeContentPropertyType__card')} key={index} >
            <img url ={card.image} classNames ={cx('card__img')} />
            <div>
            <P classNames ={cx('card__title')}>{card.name}</P>
            <P classNames ={cx('card__.distance')}>{card.distance}from center</P>
            <P classNames ={cx('card__tag')}>{card.tag}</P>
            <P classNames ={cx('card__description')}>{card.description}</P>
            <P classNames ={cx('card__type')}>{card.type}</P>
            <div classNames ={cx('card__free_cancel')}>{card.free_cancel}
            <p>You can cancel later so look greate price today!</p>
            </div>
            </div>
            <div>
            <P classNames ={cx('card__rate_text')}>{card.rate_text}<span classNames ={cx('card__rate_text')}></span></P>
            <P classNames ={cx('card__price')}>${card.price}</P>
            <P classNames ={cx('card__price--text')}>includes taxes and fees</P>
            <button classNames ={cx('card__btn')}>See availability</button>
            </div>

        </div>
        ))
        }
    </div>
    )
}
export default SearchContent