import React, {Component} from 'react';
import Character from './components/character';
import Popup from './components/popup';
import './App.css';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import data from './data';

import {
    random_all_again,
    change_shift_random
} from './reducers/shifts'

import {
    toggle_popup
} from './reducers/popup'

export const randomFrom = (arr) => arr[Math.floor(Math.random() * arr.length)];

const PopupConditional = (props) => {
    console.log(data);
    if (props.isOpen) {
        return <Popup>
            <button className="close"
                    onClick={() => props.toggle_popup()}>
                סגור
            </button>
            {data.team_members.map(member =>  <li>{member.name}</li>)}
        </Popup>;
    }
    return null;
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
                        (shift, index, array) => <li className="early-item" >
                            <Character shift={array[index]} members={props.members} />
                            <button className="choose-shift" onClick={() => props.toggle_popup()}>בחר</button>
                            <button className="random-shift" onClick={() => props.change_shift_random('morning', index)}>אקראי</button>
                        </li>
                    )}
                </ul>
                <ul className="late">
                    <li className="late-item">
                        <span>מאוחר</span>
                    </li>
                    {props.shifts.evening.map(
                        (shift, index, array) => <li className="late-item">
                            <Character shift={array[index]} members={props.members} />
                            <button className="choose-shift" onClick={() => props.toggle_popup()}>בחר</button>
                            <button className="random-shift" onClick={() => props.change_shift_random('evening', index)}>אקראי</button>
                        </li>
                    )}
                </ul>

                <PopupConditional isOpen={props.popup.isOpen} toggle_popup={props.toggle_popup}/>

            </div>
            <div className="main-buttons-wrp">
                <button id="random-all" onClick={props.random_all_again}>רנדם הכל</button>
                <button id="print" onClick={() => window.print()}>הדפס</button>
            </div>
        </div>
    </div>
);


const mapStateToProps = state => ({
    popup: state.popup.popUp,
    shifts: state.shifts.shifts
});

const mapDispatchToProps = dispatch => bindActionCreators({
    random_all_again,
    change_shift_random,
    toggle_popup
}, dispatch);


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

