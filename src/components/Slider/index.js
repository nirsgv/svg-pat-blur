import React from 'react';

const Slider = ({filtersData, chosenLayerId, layers}) => {
    console.log( layers);
    const filterChoice = filtersData.filtersData.filter(layer => layer.filterName === filtersData.chosenFilter)[0],
          layerChoiceFilter = layers.filter(layer => (layer.id !== chosenLayerId)),
          layerChoice = layerChoiceFilter[0],
          layerChoiceStl = layerChoice.stl;
    console.log( layerChoiceStl);
    console.log( layerChoiceStl[filterChoice.filterName]);
    const {
        type,
        min,
        max,
        step,
        list,
        filterName
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
            <input type={type}
                   onChange={() =>{console.log(this.value)}}
                   min={min}
                   max={max}
                   step={step}
                   list={list}
                   value={layerChoiceStl[filterName]}
            />
        </div>
    )
};


export default Slider;
