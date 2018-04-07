import React from 'react';
import Layers from './containers/layers';
import Legend from './containers/legend';
import Slider from './components/Slider';
import Incrementor from './components/Incrementor';
import DigitIncrementor from './components/DigitIncrementor';
import ChooseFilter from './components/ChooseFilter';
import LayerQuanityControl from './components/LayerQuanityControl';
import './App.css';
import {push} from 'react-router-redux'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {
    increment,
    decrement,
} from './reducers/counter'
import {
    change_range_amt
} from './reducers/ranger'
import {
    add_layer,
    delete_layer,
    choose_layer,
    set_stl,
    choose_select_option,
    increment_slider,
    decrement_slider,
} from './reducers/layers'
import {
    choose_filter
} from './reducers/filters'
const mapStateToProps = state => (
    //console.log(state.layers.layers[0].stl.opacity),
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
const App = (props) => {

    const {
        add_layer,
        count,
        opacityAmount,
        increment,
        delete_layer,
        choose_layer,
        choose_filter,
        decrement,
        layers,
        filtersData,
        chosenFilter,
        chosenLayerId,
        chosenLayerIdx,
        set_stl,
        choose_select_option,
        increment_slider,
        decrement_slider,
    } = props;


console.log(layers);
    const chosenLayerIdxe = chosenLayerIdx ? chosenLayerIdx : 0;
        return (
    <div className="App">
            <main>
                <Layers />
                <Legend />
            </main>
            <header className="App-header">
                <h1 className="App-title">{count} {opacityAmount}</h1>
                <h1 className="App-title">{opacityAmount}</h1>
            </header>

            <div id="content">
                <LayerQuanityControl
                    layers={layers}
                    choose_layer={choose_layer}
                    add_layer={add_layer}
                    delete_layer={delete_layer}
                    increment={increment}
                    decrement={decrement}
                />
                 <ChooseFilter
                     choose_filter={choose_filter}
                     filtersData={filtersData}
                     layers={layers}
                 />
                 <div className="item five">
                     <Slider
                         chosenFilter={chosenFilter}
                         chosenLayerId={chosenLayerId}
                         chosenLayerIdx={chosenLayerIdxe}
                         filtersData={filtersData}
                         layers={layers}
                         set_stl={set_stl}
                         choose_select_option={choose_select_option}
                         vals={layers[chosenLayerIdxe][chosenFilter]}
                         increment_slider={increment_slider}
                         decrement_slider={decrement_slider}
                     />
                     <Incrementor
                         chosenFilter={chosenFilter}
                         chosenLayerId={chosenLayerId}
                         chosenLayerIdx={chosenLayerIdxe}
                         filtersData={filtersData}
                         layers={layers}
                         increment_slider={increment_slider}
                         decrement_slider={decrement_slider}
                     />
                     <DigitIncrementor
                         chosenFilter={chosenFilter}
                         chosenLayerId={chosenLayerId}
                         chosenLayerIdx={chosenLayerIdxe}
                         filtersData={filtersData}
                         layers={layers}
                         increment_slider={increment_slider}
                         decrement_slider={decrement_slider}
                     />
                 </div>
            </div>
        </div>)
};


const mapDispatchToProps = dispatch => bindActionCreators({
    add_layer,
    delete_layer,
    choose_layer,
    choose_filter,
    increment,
    decrement,
    change_range_amt,
    set_stl,
    choose_select_option,
    increment_slider,
    decrement_slider,
    changePage: () => push('/about-us')
}, dispatch);


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

