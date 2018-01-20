import React, {Component} from 'react'
import styled from 'styled-components'



const CloseBtn = (props) => (
    <div className="close-button-wrp" onClick={(event) => { props.delete_layer(props.id)}}>
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

