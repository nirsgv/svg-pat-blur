import { fromJS } from 'immutable';
import uuid from 'uuid';
import rndArr from '../helpers';
export const CHOOSE_LAYER = 'layers/CHOOSE_LAYER';


const initialState = {
    chosenFilter: 'opacity',
};


export default (state = initialState, action) => {
  switch (action.type) {

      case CHOOSE_LAYER:
          return {
              ...state,
              chosenLayerId: action.payload
          };

    default:
      return state;
  }
}



export const choose_layer = (id) => {
    return dispatch => {
        dispatch({
            type: CHOOSE_LAYER,
            payload: id
        })
    }
};
