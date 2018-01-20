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
          grayScale(${props => props.styleProps.grayScale})
          invert(${props => props.styleProps.invert})
          hue-rotate(${props => props.styleProps.hueRotate});
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    `;
/*const StyledImgLayer = styled.img`
  border-color: tomato;
    `;*/
const Layer = (props) => (
    console.log(props),
            <div className="img-wrp" >
                <StyledImgLayer alt="berry1"
                                styleProps={props.layerProps.stl}
                />
            </div>
)
/*class Layer extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidReceiveProps() {

    }
    render() {
        return (
            console.log(this.props),
        <div className="img-wrp" >
            <StyledImgLayer alt="berry1"
            styleProps={this.props.layerProps.stl}
        />
        </div>
    );
    }
}*/


export default Layer;
/**
 * Created by user on 23/03/2017.
 */
