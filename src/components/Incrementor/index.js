import React from 'react';
import { getObjVal } from '../../helpers.js';

import {
    decrement_slider,
    increment_slider,
} from "../../reducers/layers";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

const Incrementor = ({
                         filtersData,
                         chosenLayerId,
                         chosenLayerIdx,
                         chosenFilter,
                         layers,
                         choose_select_option,
                         increment_slider,
                         decrement_slider,
                     }) => {
    const filterChoice = filtersData.filtersData.filter(layer => layer.filterName === filtersData.chosenFilter)[0];
    const {
        min,
        max,
        step,
        filterName,
        string,
    } = filterChoice;
    return (
        <div className={`incrementor-wrp ${string}-wrp`}>
            <button id="increment"
                    onClick={(event) => {
                        const theVal = getObjVal(chosenLayerId, layers, chosenFilter);
                        max > theVal &&
                        increment_slider(
                            theVal,
                            filterName,
                            chosenLayerIdx,
                            layers,
                            step,
                        )
                    }}>
                <span>+</span>
            </button>
            <button id="decrement"
                    onClick={(event) => {
                        const theVal = getObjVal(chosenLayerId, layers, chosenFilter);
                        min < theVal &&
                        decrement_slider(
                            theVal,
                            filterName,
                            chosenLayerIdx,
                            layers,
                            step,
                        )
                    }}>
                <span>-</span>
            </button>
        </div>
    )
};

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
    increment_slider,
    decrement_slider,
}, dispatch);


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Incrementor);


