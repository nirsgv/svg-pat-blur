import React, { Fragment } from 'react';
import Parser from 'html-react-parser';
import { getObjVal } from '../../helpers.js';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {
    set_stl,
    choose_select_option,
} from "../../reducers/layers";
const Slider = ({filtersData,
                 chosenLayerId,
                 chosenLayerIdx,
                 chosenFilter,
                 layers,
                 set_stl,
                 choose_select_option,
                 }) => {
    const filterChoice = filtersData.filtersData.filter(layer => layer.filterName === filtersData.chosenFilter)[0];
    const {
        type,
        min,
        max,
        step,
        datalistId,
        datalist,
        label,
        filterName,
        modes,
        string,
    } = filterChoice;
    const theVal = getObjVal(chosenLayerId, layers, chosenFilter);
    const switchInputMode = modes ?
        <Fragment>
            <select id={string}
                    ref={(input) => this.selectModes = input}
                    onChange={() => choose_select_option(this.selectModes.value, chosenLayerIdx, filterName, layers)}
            >
                {modes.map((item, index, array) => {
                    return (
                        <Fragment key={index}>
                            <option value={item}>
                                {item}
                            </option>
                        </Fragment>
                    )
                })}
            </select>
        </Fragment>

     : <Fragment>
            {Parser(datalist)}
            <input type={type}
                   id={string}
                   min={min}
                   max={max}
                   step={step}
                   list={datalistId}
                   value={theVal}
                   ref={(input) => this.inputPhysical = input}
                   onChange={(event) => {
                       set_stl(
                           this.inputPhysical.value,
                           filterName,
                           chosenLayerId,
                           chosenLayerIdx,
                           layers
                       )
                   }}
            />
        </Fragment>;
    return (

        <div className={`label-wrp ${string}-wrp`}>
            <label htmlFor={string}>
                {label}
            </label>

            {switchInputMode}
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
    set_stl,
    choose_select_option,
}, dispatch);


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Slider);

