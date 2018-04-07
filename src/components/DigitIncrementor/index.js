import React from 'react';
import { getObjVal } from '../../helpers.js';

const DigitIncrementor = ({
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
    const theVal = getObjVal(chosenLayerId, layers, chosenFilter);

    return (
        <div className={`digit-incrementor-wrp ${string}-wrp`}>
            <input type="number" name="points" step={step} value={theVal}/>
{/*
            <input type="submit" />
*/}
        </div>


        /*    <div className={`incrementor-wrp ${string}-wrp`}>
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
        </div>*/
    )
};
export default DigitIncrementor;
