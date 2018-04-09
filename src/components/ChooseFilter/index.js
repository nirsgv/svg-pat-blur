import React, { Fragment } from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import { choose_filter } from "../../reducers/filters";
import { getStlObj } from '../../helpers.js';

const ChooseFilter = (props) => {
const {
    choose_filter,
    filtersData,
    chosenLayerId,
    chosenLayerIdx,
    chosenFilter,
    layers,
} = props;

    const theStlObj = getStlObj(chosenLayerId, layers, chosenFilter),
          fData = filtersData.filtersData,
          keysOfFilters = fData.map(item => item.filterName);
    console.log(keysOfFilters);
return (
    <Fragment>
        <select id="filter-select"
                ref={(input)=> this.selectOption = input}
                onChange={() => choose_filter(this.selectOption.value)}
        >
            {filtersData.filtersData.map((item,index,array)=>{
                const val = item.string,
                      valKey = item.filterName,
                      id = item.id,
                      filter = item.filterName;
                return(
                <Fragment key={index}>
                    <option value={valKey}>
                        {val} {(theStlObj && keysOfFilters) && theStlObj[keysOfFilters[index]]}
                    </option>
                </Fragment>
            )})}
        </select>
    </Fragment>
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
    choose_filter,
}, dispatch);


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ChooseFilter);

