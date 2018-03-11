import React from 'react';
import Layers from './containers/layers';
import Legend from './containers/legend';
import Slider from './components/Slider';
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
} from './reducers/layers'
import {
    choose_filter
} from './reducers/filters'
const mapStateToProps = state => ({
    layers: state.layers.layers,
    layerCount: state.layers.layerCount,
    count: state.counter.count,
    opacityAmount: state.ranger.opacityAmount,
    filtersData: state.filters,
    chosenFilter: state.filters.chosenFilter,
    chosenLayerId: state.layers.chosenLayerId
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
    } = props;


console.log(layers);

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
                         filtersData={filtersData}
                         layers={layers}
                         set_stl={set_stl}
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
    changePage: () => push('/about-us')
}, dispatch);


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

