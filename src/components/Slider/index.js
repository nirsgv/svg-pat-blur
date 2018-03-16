import React, { Fragment } from 'react';

const Slider = ({filtersData, chosenLayerId, chosenLayerIdx, chosenFilter, layers, set_stl, choose_select_option, vals}) => {
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
        string,
    } = filterChoice;
    const switchInputMode = modes ?
        <Fragment>
            <select id={string}
                    ref={(input)=> this.selectModes = input}
                    onChange={() => choose_select_option(this.selectModes.value,chosenLayerIdx,filterName,layers)}
            >
                {modes.map((item,index,array)=>{
                    return(
                        <Fragment key={index}>
                            <option value={item}>
                                {item}
                            </option>
                        </Fragment>
                    )})}
            </select>
        </Fragment>

     : <input type={type}
              id={string}
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

        <div className={`${string}-wrp`}>
            <label htmlFor={string}>
                {label}
            </label>
            {switchInputMode}
        </div>
    )
};


export default Slider;
