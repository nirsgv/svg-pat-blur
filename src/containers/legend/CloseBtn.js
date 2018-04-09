import React from 'react'
import styled from 'styled-components'
import {choose_layer} from "../../reducers/layers";



const CloseBtn = (props) => (
    <div className="close-button-wrp" onClick={(event) => {
        props.delete_layer(props.id);
        props.choose_layer(props.layers[props.layers.length-2].id);
    }
    }
    >
        <CloseBtnElement className="close-button-element">
            x
        </CloseBtnElement>
    </div>
);


const CloseBtnElement = styled.div`

    border-radius: 50%;
    overflow: hidden;

`;


export default CloseBtn;

