import React, { Fragment } from 'react';

const ChooseFilter = (props) => {
const {
    choose_filter,
    filtersData,
} = props;
return (
    <Fragment>
        <select id="filter-select"
                ref={(input)=> this.selectOption = input}
                onChange={() => choose_filter(this.selectOption.value)}
        >
            {filtersData.filtersData.map((item,index,array)=>{
                const val = item.string;
                const valKey = item.filterName;
                const id = item.id;
                const filter = item.filterName;
                return(
                <option value={valKey}
                        key={index}
                >
                    {val}
                </option>
            )})}
        </select>
    </Fragment>
)
}

export default ChooseFilter;
