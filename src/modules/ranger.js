import { fromJS } from 'immutable';
export const CHANGE_RANGE_AMOUNT = 'ranger/CHANGE_RANGE_AMOUNT'

const initialState = {
  opacityAmount: 0
};

export default (state = initialState, action) => {
  switch (action.type) {

    case CHANGE_RANGE_AMOUNT:
      return {
        ...state,
        opacityAmount: action.value
      };
/*
        return state
            .set('opacityAmount', action.value);
*/

    default:
      return state
  }
}

export const change_range_amt = (e) => {
  const value = e.target.value;
  return dispatch => {
    dispatch({
      type: CHANGE_RANGE_AMOUNT,
      value
    })
  }
};




