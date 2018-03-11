import React, { Component } from 'react';
import styled from 'styled-components'
import Accessory from '../accessory';


const StyledImgLayer = styled.img`
  border-color: tomato;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    `;

const Character = (props) => (
    //console.log(props),
            <div className="character-wrp" >
                <StyledImgLayer className="character-img" alt="berry1"
                                src={props.shift.img}
                                //styleProps={props.layerProps.stl}
                />
                <Accessory type='hatsArr'/>
                <Accessory type='glassesArr'/>
                <Accessory type='mustacheArr'/>
                <Accessory type='nosesArr'/>
                <Accessory type='tiesArr'/>
                <span>{props.shift.name}</span>
            </div>
);


export default Character;
/**
 * Created by user on 23/03/2017.
 */
