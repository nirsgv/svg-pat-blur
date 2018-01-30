import React, {Component} from 'react';
import Character from './components/character';
import './App.css';
import {push} from 'react-router-redux'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'


import {
    fill_morning_shifts,
    fill_evening_shifts,
    change_shift
} from './reducers/shifts'


import {
    add_member
} from './reducers/members'

const mapStateToProps = state => ({
    layers: state.layers.layers,
    layerCount: state.layers.layerCount,
    members: state.members.team_members,
    shifts: state.shifts.shifts
});

const randomFrom = (arr) => {
    return Math.floor(Math.random() * arr.length)
};


const App = (props) => (
    console.log(props),
    <div className="App">
        <div className="container">
            <div className="content">
                <ul className="legend">
                    <li className="legend-item"/>
                    <li className="legend-item"><span>ראשון</span></li>
                    <li className="legend-item"><span>שני</span></li>
                    <li className="legend-item"><span>שלישי</span></li>
                    <li className="legend-item"><span>רביעי</span></li>
                    <li className="legend-item"><span>חמישי</span></li>
                </ul>
                <ul className="early">
                    <li className="early-item">
                        <span>מוקדם</span>
                    </li>
                    {props.shifts.morning.map(
                        (shift, index, array) => <li className="early-item" onClick={change_shift}>
                            <Character shift={array[index]} members={props.members} />
                        </li>
                    )}
                </ul>
                <ul className="late">
                    <li className="late-item">
                        <span>מאוחר</span>
                    </li>
                    {props.shifts.evening.map(
                        (shift, index, array) => <li className="late-item">
                            <Character shift={array[index]} members={props.members} onClick={change_shift}/>
                        </li>
                    )}
                </ul>
             </div>
         </div>
{/*        <div id="content">
            <div className="item two">
                <button id="plus" onClick={(event) => { props.fill_morning_shifts();props.increment();}}>+</button>
            </div>
            <div className="item three">
                <button id="minus" onClick={(event) => { props.fill_evening_shifts();props.decrement();}}>-</button>
            </div>
        </div>*/}
    </div>
);


const mapDispatchToProps = dispatch => bindActionCreators({
    fill_morning_shifts,
    fill_evening_shifts,
    change_shift,
    add_member,
    changePage: () => push('/about-us')
}, dispatch);


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

