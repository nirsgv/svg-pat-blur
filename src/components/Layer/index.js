import React, { Component } from 'react';
import styled from 'styled-components'


const StyledImgLayer = styled.img`
  border-color: tomato;
  color: ${props => props.styleProps.color ? 'gold' : 'black'};
  opacity: ${props => props.styleProps.opacity};
  mix-blend-mode: ${props => props.styleProps.mixBlendMode};
  background-blend-mode: ${props => props.styleProps.backgroundBlendMode};
  background-size: ${props => props.styleProps.backgroundSize};
  background-image: url('${props => props.styleProps.backgroundImage}');
  filter: blur(${props => props.styleProps.blur}px)
          sepia(${props => props.styleProps.sepia})
          saturate(${props => props.styleProps.saturate})
          contrast(${props => props.styleProps.contrast})
          grayscale(${props => props.styleProps.grayScale})
          invert(${props => props.styleProps.invert})
          hue-rotate(${props => props.styleProps.hueRotate});
    `;

const Layer = (props) => (
    console.log(props),
            <div className="imgLayer" >
                <StyledImgLayer alt="berry1" styleProps={props.layerProps.stl} />
            </div>
)




export default Layer;
/**
 * Created by user on 23/03/2017.
 */
