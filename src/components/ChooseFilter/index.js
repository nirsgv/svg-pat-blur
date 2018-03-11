import React, { Component, Fragment } from 'react';
import styled from 'styled-components'
import Slider from '../Slider'


const ChooseFilter = (props) => {
const {
    add_layer,
    increment,
    delete_layer,
    choose_layer,
    decrement,
    layers,
} = props;
const filtersArray = [
    {color:'color'},
    {backgroundRepeat: 'background-repeat'},
    {backgroundImage: 'background-image'},
    {opacity: 'opacity'},
    {blur: 'blur'},
    {saturate: 'saturate'},
    {contrast: 'contrast'},
    {sepia: 'sepia'},
    {grayScale: 'grayscale'},
    {invert: 'invert'},
    {hueRotate: 'hue-rotate'},
    {backgroundSize: 'background-size'},
    {backgroundBlendMode: 'background-blend-mode'},
    {mixBlendMode: 'mix-blend-mode'},
];

return (
    <Fragment>
        <select id="filter-select">
            {filtersArray.map((item,index,array)=>{
                const val = item[Object.keys(item)[0]];
                return(
                <option value={val}>
                    {val}
                </option>
            )})}
        </select>
    </Fragment>
)
}

export default ChooseFilter;
