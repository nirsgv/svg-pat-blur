import React, { Fragment } from 'react';


const LayerQuanityControl = (props) => {
const {
    add_layer,
    increment,
    delete_layer,
    choose_layer,
    decrement,
    layers,
} = props;
return (
    <Fragment>
    <div className="item two">

        <button id="plus" onClick={(event) => {
            add_layer();
            increment();
            choose_layer(layers[layers.length-1].id);
        }}>+
        </button>
    </div>,

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
        </Fragment>
)
}

export default LayerQuanityControl;
