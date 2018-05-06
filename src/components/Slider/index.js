import React, { Fragment } from 'react';
import Parser from 'html-react-parser';
import { getObjVal } from '../../helpers.js';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {
    set_stl,
    choose_select_option,
} from "../../reducers/layers";
import {
    isBksSelectionOn,
    open_bkg_select_popup,
} from "../../reducers/bkgSelectionPopup";
const Slider = ({filtersData,
                 chosenLayerId,
                 chosenLayerIdx,
                    isBksSelectionOn,
                    open_bkg_select_popup,
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
    const switchInputMode =
        filterName !== 'backgroundImage' ?  // HERE filterName is not 'backgroundImage'
        modes ? // HERE modes is TRUE
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

     : // HERE modes is FALSE
            <Fragment>
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
        </Fragment>
        : // HERE !!(filterName === 'backgroundImage')
        <Fragment>
            <div className={`button-wrp ${!isBksSelectionOn ? 'open' : 'close'}-button`}>
                <button value="selct bavakground" onClick={() => {open_bkg_select_popup(isBksSelectionOn)}}>
                     {!isBksSelectionOn ? 'open' : 'close'}
                </button>
            </div>

         </Fragment>
    ;
    return (

        <div className={`inputs-wrp ${string}-wrp`}>
{/*            <label htmlFor={string}>
                {label}
            </label>*/}

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
        isBksSelectionOn: state.bkgSelectionPopup.open
    });

const mapDispatchToProps = dispatch => bindActionCreators({
    set_stl,
    choose_select_option,
    open_bkg_select_popup,
}, dispatch);


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Slider);

