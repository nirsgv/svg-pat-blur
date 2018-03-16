import React from 'react';

const Slider = ({filtersData, chosenLayerId, chosenLayerIdx, chosenFilter, layers, set_stl, vals}) => {
    console.log( layers);
    const filterChoice = filtersData.filtersData.filter(layer => layer.filterName === filtersData.chosenFilter)[0];
    const {
        type,
        min,
        max,
        step,
        list,
        label,
        filterName,
    } = filterChoice;
    return (
        <div className="slider-wrp">
            <datalist id="tickmarks">
                <option value="0" label="0%"/>
                <option value="10"/>
                <option value="20"/>
                <option value="30"/>
                <option value="40"/>
                <option value="50" label="50%"/>
                <option value="60"/>
                <option value="70"/>
                <option value="80"/>
                <option value="90"/>
                <option value="100" label="100%"/>
            </datalist>
            <label>{label}</label>
            <input type={type}
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
            />
        </div>
    )
};


export default Slider;
