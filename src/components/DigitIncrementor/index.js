import React from 'react';
import { getObjVal } from '../../helpers.js';

const DigitIncrementor = ({
                         filtersData,
                         chosenLayerId,
                         chosenLayerIdx,
                         chosenFilter,
                         layers,
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
            <input type="text" name="points" id="label-incrementor" step={step} value={theVal}/>
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
