import React, { Fragment } from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";


import {
    add_layer,
    delete_layer,
    choose_layer,
} from "../../reducers/layers";

const LayerQuanityControl = (props) => {
const {
    add_layer,
    delete_layer,
    choose_layer,
    layers,
} = props;
return (
    <Fragment>

        <button id="plus" onClick={(event) => {
            add_layer();
            choose_layer(layers[layers.length-1].id);
        }}>+
        </button>

    <button id="minus" onClick={(event) => {
    //condition for both actions
        const func = () => {
            delete_layer((layers[layers.length - 1].id));
            choose_layer(layers[layers.length-2].id);
        };
        (layers.length > 1) && func();
    }}>-
</button>
        </Fragment>
)
}
const mapStateToProps = state => (
    {
        layers: state.layers.layers,
        layerCount: state.layers.layerCount,
        count: state.counter.count,
        opacityAmount: state.ranger.opacityAmount,
        filtersData: state.filters,
        chosenFilter: state.filters.chosenFilter,
        chosenLayerId: state.layers.chosenLayerId,
        chosenLayerIdx: state.layers.chosenLayerIdx,
    });

const mapDispatchToProps = dispatch => bindActionCreators({
    add_layer,
    delete_layer,
    choose_layer,
}, dispatch);


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LayerQuanityControl);

