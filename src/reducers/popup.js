import { fromJS } from 'immutable';
import uuid from 'uuid';

export const TOGGLE_POPUP = 'popup/TOGGLE_POPUP';

const initialState = {
    popUp: {
        open: false
    }
};

export default (state = initialState, action) => {
  switch (action.type) {
      case TOGGLE_POPUP:
      return {
          shifts: {
              ...(state.shifts),
              morning: action.payload
          }
      };
    default:
      return state
  }
}

export const toggle_popup = ( ) => {
    return dispatch => {
        dispatch({
            type: TOGGLE_POPUP,
            payload: ''
        })
    }
};

