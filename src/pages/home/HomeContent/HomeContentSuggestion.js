
import styles from ' ../../../components/scss/home/HomeContent/HomeContentSuggestion.module.scss'

import classNames from 'classnames/bind'
import data from "../../../data/city.json"
const cx = classNames.bind(styles);

function HomeContentSuggestion (){
    return (
        <div classNames ={cx('container', 'HomeContentSuggestion__container')} >
        {data.map((card, index) =>(
        <div classNames={cx('HomeContentSuggestion__card')} key={index} >
            <img url ={card.image} classNames ={cx('card__img')} />
            <P classNames ={cx('card__title')}>{card.name}</P>
            <P classNames ={cx('card__subText')}>{card.subText}</P>

        </div>
        ))
        }
    </div>
    )
}
export default HomeContentSuggestion