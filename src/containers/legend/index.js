import React, {Fragment} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import LayerIndicatorButton from './LayerIndicatorButton'
import CloseBtn from './CloseBtn'
import MoveUp from "./MoveUp";

import {
delete_layer,
choose_layer,
move_up,
} from '../../reducers/layers'

const mapStateToProps = state => (
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
                        <Fragment key={index}>
                            <LayerIndicatorButton index={index} key={index} layerProps={item} choose_layer={props.choose_layer} chosenLayerId={props.chosenLayerId}/>
                            <CloseBtn id={item.id} key={Date.now()} delete_layer={props.delete_layer} choose_layer={props.choose_layer} layers={props.layers}/>
                            <MoveUp layers={props.layers} index={index} move_up={props.move_up} moveUp={true} greySpan={index===(array.length)-1}/>
                            <MoveUp layers={props.layers} index={index} move_up={props.move_up} moveUp={false} greySpan={index===0}/>
                        </Fragment>
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
    move_up,
}, dispatch);


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Legend);

