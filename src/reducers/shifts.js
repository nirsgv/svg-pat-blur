import { fromJS } from 'immutable';
import uuid from 'uuid';
import data from '../data';

export const RANDOM_ALL_AGAIN = 'shifts/RANDOM_ALL_AGAIN';
export const CHANGE_SHIFT = 'shifts/CHANGE_SHIFT';
export const CHANGE_SHIFT_SPECIFIC = 'shifts/CHANGE_SHIFT_SPECIFIC';
export const CHANGE_SHIFT_RANDOM = 'shifts/CHANGE_SHIFT_RANDOM';

const members = data.team_members;

/**
 *
 * @param arr
 * @returns {*}
 */
const randomFrom = (arr) => arr[Math.floor(Math.random() * arr.length)];

/**
 *
 * @param arr
 * @param that
 * @returns {*}
 */
const getRandomNotThat = ( arr, that ) => {
    const arrWithoutThat = arr.filter( value => value !== that );
    return randomFrom(arrWithoutThat);
};

/**
 *
 * @param members
 * @returns {{morning: Array, evening: Array}}
 */
const getRandomShifts = (members) => {
    const morning = [];
    const evening = [];

    for(let i = 0; i <= 4 ; i++ ){
        morning[i] = randomFrom(members);
        const newArray = members.reduce( (myArray , value) => {
            if(value.id !== morning[i].id){
                myArray.push( value );
            }
            return myArray;
        },[]);
        evening[i] = randomFrom(newArray);
    }

     return { morning , evening };
};

const initialState = {
    shifts: { ...getRandomShifts(members) }
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
      case RANDOM_ALL_AGAIN:
          return {
              shifts: { ...getRandomShifts(members) }
          };
      case CHANGE_SHIFT_SPECIFIC:
          return {
              shifts: { ...getRandomShifts(members) }
          };
      case CHANGE_SHIFT_RANDOM:

          console.log('fires');

          const thatThatWeDontWantEvening = state.shifts.evening[action.index];
          const thatThatWeDontWantMorning = state.shifts.morning[action.index];
          const newMemnersArray = members.filter( (value) => ( value !== thatThatWeDontWantEvening &&
                                                                value !== thatThatWeDontWantMorning ) );
          const newShiftMember = randomFrom(newMemnersArray);

          if(action.shiftTime === 'morning'){
              let morning = [ ...state.shifts.morning ];
              morning[action.index] = newShiftMember;

              return {
                  shifts: {
                      ...state.shifts,
                      morning
                  }
              }
          }

          if(action.shiftTime === 'evening'){
              let evening = [ ...state.shifts.evening ];
              evening[action.index] = newShiftMember;

              return {
                  shifts: {
                      ...state.shifts,
                      evening
                  }
              }
          }

          return state;
    default:
      return state
  }
}

export const change_shift_random = ( shiftTime , index ) => {
    return dispatch => {
        dispatch({
            type: CHANGE_SHIFT_RANDOM,
            shiftTime,
            index
        })
    }
};

export const random_all_again = () => {
    return dispatch => {
        dispatch({
            type: RANDOM_ALL_AGAIN
        })
    }
};

export const change_shift_specific = () => {
    return dispatch => {
        dispatch({
            type: CHANGE_SHIFT_SPECIFIC
        })
    }
};
