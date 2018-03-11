import React, { Component } from 'react';
import styled from 'styled-components'


const Slider = ({filtersData, chosenLayerId, layers}) => {
    console.log( layers);
    let filterChoice = filtersData.filtersData.filter(layer => layer.filterName === filtersData.chosenFilter)[0];
    let layerChoiceFilter = layers.filter(layer => (layer.id !== chosenLayerId));
    let layerChoice = layerChoiceFilter[0];
    let layerChoiceStl = layerChoice.stl;
    console.log( layerChoiceStl);
    console.log( layerChoiceStl[filterChoice.filterName]);

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
            <input type={filterChoice.type}
                   min={filterChoice.min}
                   max={filterChoice.max}
                   step={filterChoice.step}
                   list={filterChoice.list}
                   value={layerChoiceStl[filterChoice.filterName]}
            />
        </div>
    )
};


export default Slider;
