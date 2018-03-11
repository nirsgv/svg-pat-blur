import React, { Component } from 'react';
import styled from 'styled-components'


const Slider = (props) => (
    console.log(props),
            <div className="slider-wrp" >
                <datalist id="tickmarks">
                    <option value="0" label="0%" />
                    <option value="10" />
                    <option value="20" />
                    <option value="30" />
                    <option value="40" />
                    <option value="50" label="50%" />
                    <option value="60" />
                    <option value="70" />
                    <option value="80" />
                    <option value="90" />
                    <option value="100" label="100%" />
                </datalist>
                <input type="range"
                       min="0"
                       max="10"
                       step="0.01"
                       list="tickmarks"
                />
            </div>
)


export default Slider;
