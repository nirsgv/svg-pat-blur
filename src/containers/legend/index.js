import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import LayerIndicatorButton from './LayerIndicatorButton'
import CloseBtn from './CloseBtn'

import {
    delete_layer,
    choose_layer
} from '../../reducers/layers'

const mapStateToProps = state => (
    console.log('state'),
    console.log(state),
    {
    layers: state.layers.layers,
    chosenLayerId: state.layers.chosenLayerId
});






const Legend = (props) => (
console.log(props.chosenLayerId),
<div className="legend-wrp">
    <ul className="layer-indicator-button-list" >
        {
         props.layers.map((item, index, array) => {
             return (
                        [
                            <LayerIndicatorButton index={index} layerProps={item} choose_layer={props.choose_layer} chosenLayerId={props.chosenLayerId}/>,
                            <CloseBtn id={item.id} delete_layer={props.delete_layer}/>

                        ]
                    )
                }
            )
        }
    </ul>
</div>
);




const mapDispatchToProps = dispatch => bindActionCreators({
    delete_layer,
    choose_layer,
}, dispatch);


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Legend);

