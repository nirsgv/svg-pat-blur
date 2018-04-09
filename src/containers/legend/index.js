import React, {Fragment} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import LayerIndicatorButton from './LayerIndicatorButton'
import CloseBtn from './CloseBtn'
import MoveUp from "./MoveUp";
import { getObjVal } from '../../helpers.js';

import {
delete_layer,
choose_layer,
move_up,
} from '../../reducers/layers'

const mapStateToProps = state => (
    console.log(state),
    {
    layers: state.layers.layers,
    chosenLayerId: state.layers.chosenLayerId
});






const Legend = (props) => {
    const someBackgroundImage = getObjVal(props.chosenLayerId, props.layers, 'backgroundImage');
    console.log(someBackgroundImage);
    return (
            <div className="legend-wrp">
                <ul className="legend-list">
                    {
                        props.layers.map((item, index, array) => {
                            const tmpBackgroundImage = getObjVal(item.id, array, 'backgroundImage');
                                return (
                                    <li className="legend-item" key={index}>
                                        <img src={tmpBackgroundImage} alt="" style={{width: '30px', height: '20px'}}/>
                                        <LayerIndicatorButton index={index} key={index} layerProps={item}
                                                              choose_layer={props.choose_layer}
                                                              chosenLayerId={props.chosenLayerId}/>
                                        <CloseBtn id={item.id} key={Date.now()} delete_layer={props.delete_layer}
                                                  choose_layer={props.choose_layer} layers={props.layers}/>
                                        <MoveUp layers={props.layers} index={index} move_up={props.move_up} moveUp={false}
                                                greySpan={index === 0}/>
                                        <MoveUp layers={props.layers} index={index} move_up={props.move_up} moveUp={true}
                                                greySpan={index === (array.length) - 1}/>
                                    </li>
                                )
                            }
                        )
                    }
                </ul>
            </div>
    );
}



const mapDispatchToProps = dispatch => bindActionCreators({
    delete_layer,
    choose_layer,
    move_up,
}, dispatch);


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Legend);

