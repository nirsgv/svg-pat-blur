import React from 'react';

const getObjVal = (chosenLayerId, layers, chosenFilter) => {
    const chosensObjStl = (layers.filter(layer => layer.id === chosenLayerId)[0]).stl;
    const chosensObjStlVal = chosensObjStl[chosenFilter];
    console.log(chosensObjStl, chosensObjStlVal);
    return chosensObjStlVal;
};
const Incrementor = ({
                         filtersData,
                         chosenLayerId,
                         chosenLayerIdx,
                         chosenFilter,
                         layers,
                         set_stl,
                         choose_select_option,
                         increment_slider,
                         decrement_slider,
                     }) => {
    const filterChoice = filtersData.filtersData.filter(layer => layer.filterName === filtersData.chosenFilter)[0];
    const {
        min,
        max,
        step,
        filterName,
        string,
    } = filterChoice;
    return (
        <div className={`incrementor-wrp ${string}-wrp`}>
            <button id="increment"
                    onClick={(event) => {
                        const theVal = getObjVal(chosenLayerId, layers, chosenFilter);
                        max > theVal &&
                        increment_slider(
                            theVal,
                            filterName,
                            chosenLayerIdx,
                            layers,
                            step,
                        )
                    }}>
                <span>+</span>
            </button>
            <button id="decrement"
                    onClick={(event) => {
                        const theVal = getObjVal(chosenLayerId, layers, chosenFilter);
                        min < theVal &&
                        decrement_slider(
                            theVal,
                            filterName,
                            chosenLayerIdx,
                            layers,
                            step,
                        )
                    }}>
                <span>-</span>
            </button>
        </div>
    )
};
export default Incrementor;
