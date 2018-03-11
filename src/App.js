import React, {Component} from 'react';
import logo from './logo.svg';
import Layers from './containers/layers';
import Legend from './containers/legend';
import Slider from './components/Slider';
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
    delete_layer
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
                <div className="item two">
                    <button id="plus" onClick={(event) => {
                        add_layer();
                        increment();
                    }}>+
                    </button>
                </div>

                <div className="item three">
                    <button id="minus" onClick={(event) => {
                        (layers.length > 0) && //condition for both actions
                        [delete_layer(
                            (layers[layers.length - 1].id)
                        ),
                        decrement()];
                    }}>-
                    </button>
                </div>

                 <div className="item five">
                     <Slider />
                 </div>
                 <div className="item six"></div>
                 <div className="item seven"></div>
                 <div className="item eight"></div>
                 <div className="item nine"></div>
            </div>
        </div>)
};


const mapDispatchToProps = dispatch => bindActionCreators({
    add_layer,
    delete_layer,
    increment,
    decrement,
    change_range_amt,
    changePage: () => push('/about-us')
}, dispatch);


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

