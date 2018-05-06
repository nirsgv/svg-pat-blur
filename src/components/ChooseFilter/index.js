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
                value="xxx"
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
        <ul id="filter-options"
               // ref={(input)=> this.selectOption = input}

        >
            {filtersData.filtersData.map((item,index,array)=>{
                let hovered = false;
                const mouseEnter = () => {
                    console.log('mouse enter');
                    hovered = true;
                    //this.setState({opacity: 0.5})
                };

                const mouseLeave = () => {
                    console.log('mouse leave');
                    hovered = false;
                    //this.setState({opacity: 1})
                };
                const val = item.string,
                    valKey = item.filterName,
                    id = item.id,
                    icon = item.awesomeIcon,
                    filter = item.filterName,
                    onStateItem = chosenFilter === filter ? 'selected' : '',
                    hoveredItem = hovered ? 'hovered' : '';
                return(
                    <Fragment key={index}>
                        <li className={`filter-option ${onStateItem} ${hoveredItem}`} value={valKey}
                            onClick={() => choose_filter(filter)}
                        >
                            <div className="filter-name">
                                {val}
                            </div>
                            <div className="filter-icon-wrp">
                                <i className={icon}></i>
                            </div>
                            <div className="current-value">
                                {(theStlObj && keysOfFilters) && theStlObj[keysOfFilters[index]]}
                            </div>
                        </li>
{/*
                        <i class="far fa-user"></i>
                        <i class="fal fa-user"></i>
                        <i class="fab fa-github-square"></i>
*/}

                    </Fragment>
                )})}
        </ul>
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

