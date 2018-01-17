import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import Layer from '../../components/Layer'
import styled from 'styled-components'


const mapStateToProps = state => ({
    layers: state.layers.layers
});


    const Layers = (props) => (

<div className="layers">
    <ul className="layers">
        {
         props.layers.map((item, index, array) => {
             return (
                     <li>
                         <Layer layerProps={item}/>
                     </li>
                    )
                }
            )
        }
    </ul>
</div>
);




const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch);


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Layers);

