import React, {Component} from 'react'
import styled from 'styled-components'


const LayerIndicatorButtonWrp = styled.div`

    border-radius: 50%;
    overflow: hidden;

`;
const LayerIndicatorButtonElement = styled.button`

    background-color: red;

`;




const LayerIndicatorButton = (props) => {
    let activeClass = (props.chosenLayerId === props.layerProps.id) ? 'active' : '';
    return (
        <li className={`layer-indicator-button-list-item ${activeClass}`} key={props.index} onClick={() => props.choose_layer(props.layerProps.id)}>
            <LayerIndicatorButtonWrp className="layer-indicator-button-wrp">
                <LayerIndicatorButtonElement className="layer-indicator-button">
                    {props.index}
                    {props.layerProps.id}
                </LayerIndicatorButtonElement>
            </LayerIndicatorButtonWrp>
        </li>
    )
};






export default LayerIndicatorButton;

