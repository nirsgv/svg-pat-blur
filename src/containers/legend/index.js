import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import LayerIndicatorButton from './LayerIndicatorButton'
import CloseBtn from './CloseBtn'

import {
    delete_layer
} from '../../modules/layers'

const mapStateToProps = state => ({
    layers: state.layers.layers
});





const Legend = (props) => (

<div className="legend-wrp">
    <ul className="layer-indicator-button-list" >
        {
         props.layers.map((item, index, array) => {
             return (
                        [
                            <LayerIndicatorButton index={index} layerProps={item} />,
                            <CloseBtn index={index} delete_layer={props.delete_layer}/>

                        ]
                    )
                }
            )
        }
    </ul>
</div>
);




const mapDispatchToProps = dispatch => bindActionCreators({
    delete_layer
}, dispatch);


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Legend);

