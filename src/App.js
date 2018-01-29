import React, {Component} from 'react';
import Character from './components/character';
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
const App = (props) => (

    <div className="App">
        <div className="container">
            <div className="content">
                <ul className="legend">
                    <li className="legend-item"></li>
                    <li className="legend-item"><span>ראשון</span></li>
                    <li className="legend-item"><span>שני</span></li>
                    <li className="legend-item"><span>שלישי</span></li>
                    <li className="legend-item"><span>רביעי</span></li>
                    <li className="legend-item"><span>חמישי</span></li>
                </ul>
                <ul className="early">
                    <li className="early-item"><span>מוקדם</span></li>
                    <li className="early-item"><Character /></li>
                    <li className="early-item"><Character /></li>
                    <li className="early-item"><Character /></li>
                    <li className="early-item"><Character /></li>
                    <li className="early-item"><Character /></li>
                </ul>
                <ul className="late">
                    <li className="late-item"><span>מאוחר</span></li>
                    <li className="late-item"><Character /></li>
                    <li className="late-item"><Character /></li>
                    <li className="late-item"><Character /></li>
                    <li className="late-item"><Character /></li>
                    <li className="late-item"><Character /></li>
                </ul>
             </div>
         </div>
        <div id="content">
            <div className="item two">
                <button id="plus" onClick={(event) => { props.add_layer();props.increment();}}>+</button>
            </div>
            <div className="item three">
                <button id="minus" onClick={(event) => { props.delete_layer((props.layers[props.layers.length-1].id));props.decrement();}}>-</button>
            </div>
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

