import React, {Component} from 'react'
import styled from 'styled-components'


const LayerIndicatorButtonWrp = styled.div`

    border-radius: 50%;
    overflow: hidden;

`;
const LayerIndicatorButtonElement = styled.button`

    background-color: red;

`;




const LayerIndicatorButton = (props) => (
console.log(props.layerProps),
<li className="layer-indicator-button-list-item" key={props.index}>
    <LayerIndicatorButtonWrp className="layer-indicator-button-wrp">
        <LayerIndicatorButtonElement className="layer-indicator-button">
            {props.index}
            {props.layerProps.id}
        </LayerIndicatorButtonElement>
    </LayerIndicatorButtonWrp>
</li>
);






export default LayerIndicatorButton;

