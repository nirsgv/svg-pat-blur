import React, { Component } from 'react';
import styled, { keyframes } from "styled-components"
import Hat1 from '../../assets/img/accesories/hats/hat1.png';
import Hat2 from '../../assets/img/accesories/hats/hat2.png';
import Hat3 from '../../assets/img/accesories/hats/hat3.png';
import Hat4 from '../../assets/img/accesories/hats/hat4.png';
import Hat5 from '../../assets/img/accesories/hats/hat5.png';
import Hat6 from '../../assets/img/accesories/hats/hat6.png';
import Glass1 from '../../assets/img/accesories/glasses/glass1.png';
import Glass2 from '../../assets/img/accesories/glasses/glass2.png';
import Glass3 from '../../assets/img/accesories/glasses/glass3.png';
import Mustache1 from '../../assets/img/accesories/mustaches/mustache1.png';
import Mustache2 from '../../assets/img/accesories/mustaches/mustache2.png';
import Mustache3 from '../../assets/img/accesories/mustaches/mustache3.png';
import Mustache4 from '../../assets/img/accesories/mustaches/mustache4.png';
import Mustache5 from '../../assets/img/accesories/mustaches/mustache5.png';
import Nose1 from '../../assets/img/accesories/noses/nose1.png';
import Tie1 from '../../assets/img/accesories/ties/tie1.png';

const types = {
    hatsArr : [Hat1, Hat2, Hat3, Hat4, Hat5, Hat6],
    glassesArr : [Glass1, Glass2, Glass3],
    mustacheArr : [Mustache1, Mustache2, Mustache3, Mustache4, Mustache5],
    nosesArr : [Nose1],
    tiesArr : [Tie1],
};

const randomFrom = (arr) => arr[Math.floor(Math.random() * arr.length)];
const fadeIn = keyframes`
    from {opacity: 0;}
    to {opacity: 1;}
`;
const StyledImgAccessory = styled.img`
    background-position: center center;
    background-size: cover;
    position: absolute;
    opacity: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    animation-iteration-count: 1;
    animation: ${fadeIn} 1.5s linear;
`;

const Accessory = (props) => {
    const { type } = props;
    return (
        console.log(props),
            <div className="accessory" >
                <StyledImgAccessory src={randomFrom(types[type])} alt=""/>
            </div>
    );
}


export default Accessory;
