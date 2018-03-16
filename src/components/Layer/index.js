import React from 'react';
import styled from 'styled-components'


const StyledImgLayer = styled.img`
  border-color: tomato;
  color: ${props => props.lp.color ? 'gold' : 'black'};
  opacity: ${props => props.lp.opacity};
  mix-blend-mode: ${props => props.lp.mixBlendMode};
  background-repeat: ${props => props.lp.backgroundRepeat};
  background-blend-mode: ${props => props.lp.backgroundBlendMode};
  background-size: ${props => props.lp.backgroundSize}%;
  background-image: url('${props => props.lp.backgroundImage}');
  filter: blur(${props => props.lp.blur}px)
          brightness(${props => props.lp.brightness}%)
          hue-rotate(${props => props.lp.hueRotate}deg)
          sepia(${props => props.lp.sepia}%)
          saturate(${props => props.lp.saturate})
          contrast(${props => props.lp.contrast}%)
          invert(${props => props.lp.invert}%)
          grayScale(${props => props.lp.grayScale}%)
          ;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
    `;
const Layer = (props) => (
    console.log(props),
            <div className="img-wrp" >
                <StyledImgLayer alt="berry1"
                                id={props.layerId}
                                lp={props.layerProps}
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

    );
    }
}*/


export default Layer;
/**
 * Created by user on 23/03/2017.
 */
