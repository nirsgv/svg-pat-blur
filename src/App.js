import React, {Component} from 'react';
import logo from './logo.svg';
import Layers from './containers/layers';
import Legend from './containers/legend';
import './App.css';
import {push} from 'react-router-redux'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {
    increment,
    decrement,
} from './modules/counter'
import {
    change_range_amt
} from './modules/ranger'
import {
    add_layer,
    delete_layer
} from './modules/layers'
const mapStateToProps = state => ({
    layers: state.layers.layers,
    layerCount: state.layers.layerCount,
    count: state.counter.count,
    opacityAmount: state.ranger.opacityAmount
});
const App = (props) => (

    <div className="App">

        <main>
            <Layers />
            <Legend />
        </main>
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <h1 className="App-title">{props.count} {props.opacityAmount}</h1>
            <h1 className="App-title">{props.opacityAmount}</h1>
        </header>

        <div id="content">
{/*            <div className="item one">
                <p className=""><span>1</span></p>
                <p className=""><span>2</span></p>
                <p className=""><span>3</span></p>
                <p className=""><span>4</span></p>
            </div>*/}
            <div className="item two">
                <button id="plus" onClick={(event) => { props.add_layer();props.increment();}}>+</button>
            </div>

            <div className="item three">
                <button id="minus" onClick={(event) => { props.delete_layer();props.decrement();}}>-</button>
            </div>
            <div className="item four">
                <p>1</p><p>2</p><p>3</p>
            </div>
            <div className="item five">
                <datalist id="tickmarks">
                    <option value="0" label="0%"/>
                    <option value="10"/>
                    <option value="20"/>
                    <option value="30"/>
                    <option value="40"/>
                    <option value="50" label="50%"/>
                    <option value="60"/>
                    <option value="70"/>
                    <option value="80"/>
                    <option value="90"/>
                    <option value="100" label="100%"/>
                </datalist>
                <input type="range" min="0" max="10" step="0.01" list="tickmarks"
                       onChange={props.change_range_amt}
                />
            </div>
            <div className="item six"></div>
            <div className="item seven"></div>
            <div className="item eight"></div>
            <div className="item nine"></div>
        </div>
    </div>
);


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

