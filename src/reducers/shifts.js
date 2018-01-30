import { fromJS } from 'immutable';
import uuid from 'uuid';
import data from '../data';

export const FILL_MORNING_SHIFTS = 'shifts/FILL_MORNING_SHIFTS';
export const FILL_EVENING_SHIFTS = 'shifts/FILL_EVENING_SHIFTS';
export const CHANGE_SHIFT = 'shifts/CHANGE_SHIFT';

const members = data.team_members;
const randomFrom = (arr) => arr[Math.floor(Math.random() * arr.length)];

const morning = [];
const evening = [];

for(let i = 0; i <= 4 ; i++ ){
    morning[i] = randomFrom(members);
    let newArray = members.reduce( (myArray , value) => {
        if(value.id !== morning[i].id){
            myArray.push( value );
        }
        return myArray;
    },[]);
    evening[i] = randomFrom(newArray);
}

const initialState = {
    shifts: {
        morning,
        evening
    }
};

export default (state = initialState, action) => {
  switch (action.type) {

      case CHANGE_SHIFT:
      return {
          shifts: {
              ...(state.shifts),
              morning: action.payload
          }
      };
      case FILL_MORNING_SHIFTS:
      return {
          shifts: {
              ...(state.shifts),
              morning: action.payload
          }
      };
      case FILL_EVENING_SHIFTS:
      return {
          shifts: {
              ...(state.shifts),
              evening: action.payload
          }
      };
    default:
      return state
  }
}


export const fill_morning_shifts = () => {
    const payload = [members[randomFrom(members)],members[randomFrom(members)],members[randomFrom(members)],members[randomFrom(members)],members[randomFrom(members)]];
        console.log(payload);
  return dispatch => {
    dispatch({
      type: FILL_MORNING_SHIFTS,
      payload
    })
  }
};


export const fill_evening_shifts = (x) => {
    return dispatch => {
        dispatch({
            type: FILL_EVENING_SHIFTS,
            payload: x
        })
    }
};

export const change_shift = (x) => {
    alert('change_shift');
    return dispatch => {
        dispatch({
            type: FILL_EVENING_SHIFTS,
            payload: x
        })
    }
};
