import React, { Fragment } from 'react';

const Slider = ({filtersData, chosenLayerId, chosenLayerIdx, chosenFilter, layers, set_stl, vals}) => {
    const filterChoice = filtersData.filtersData.filter(layer => layer.filterName === filtersData.chosenFilter)[0];
    const {
        type,
        min,
        max,
        step,
        list,
        label,
        filterName,
        modes,
    } = filterChoice;
    const switchInputMode = modes ?

        <Fragment>
            <select id={filterName}
                    ref={(input)=> this.selectModes = input}
                    //onChange={() => choose_filter(this.selectOption.value)}
            >
                {filtersData.filtersData.map((item,index,array)=>{
                    const val = item.string,
                        valKey = item.filterName,
                        id = item.id,
                        filter = item.filterName;
                    return(
                        <Fragment key={index}>
                            <option value={valKey}
                            >
                                {val}
                            </option>
                        </Fragment>
                    )})}
            </select>
        </Fragment>

     : <input type={type}
              id={filterName}
                min={min}
                max={max}
                step={step}
                list={list}
                value={vals}
                ref={(input)=> this.inputPhysical = input}
                onChange={(event) => {
                    set_stl(
                        this.inputPhysical.value,
                        filterName,
                        chosenLayerId,
                        chosenLayerIdx,
                        layers
                    )
                }}
    />;
    return (

        <div className={`${filterName}-wrp`}>
            <label htmlFor={filterName}>
                {label}
            </label>
            {switchInputMode}
        </div>
    )
};


export default Slider;
