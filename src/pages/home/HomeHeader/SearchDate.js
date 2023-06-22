import React, {useState} from 'react'
import { addDays } from 'date-fns';

const [date, setDate] = useDate([
  {
    startDate: new Date(),
    endDate: addDays(new Date(), 7),
    key: 'selection'
  }
]);
function SearchDate(){
    return(
        <div className = {cx('headerHome__search--container')}>
        <i className ={cx('headerHome__search--icon')}></i>
        <input type="text" className ={cx('fa','fa-bed', 'headerHome__search--input')} placeholder="Where are you going ?"></input>
        <DateRangePicker
  onChange={item => setDate([item.selection])}
  showSelectionPreview={true}
  moveRangeOnFirstSelection={false}
  months={2}
  ranges={state}
  direction="horizontal"
/>;
      </div>
    )
}
export default SearchDate