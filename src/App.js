import React, {Component} from 'react';
import logo from './logo.svg';
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
} from './reducers/layers'
const mapStateToProps = state => ({
    layers: state.layers.layers,
    layerCount: state.layers.layerCount,
    count: state.counter.count,
    opacityAmount: state.ranger.opacityAmount
});
const App = (props) => {

    const {
        add_layer,
        count,
        opacityAmount,
        increment,
        delete_layer,
        choose_layer,
        decrement,
        layers,
    } = props;




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
                 <ChooseFilter />
                 <div className="item five">
                     <Slider />
                 </div>
            </div>
        </div>)
};


const mapDispatchToProps = dispatch => bindActionCreators({
    add_layer,
    delete_layer,
    choose_layer,
    increment,
    decrement,
    change_range_amt,
    changePage: () => push('/about-us')
}, dispatch);


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

