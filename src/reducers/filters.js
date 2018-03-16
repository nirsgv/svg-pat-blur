import { fromJS } from 'immutable';
import uuid from 'uuid';
import rndArr from '../helpers';
export const CHOOSE_FILTER = 'layers/CHOOSE_FILTER';


const initialState = {
    chosenFilter: 'opacity',
    filtersData: [
        {
         id:1,
         filterName:'color',
         string:'color',
         min:0,
         max:10,
         step:0.1,
         suffix:'',
         value: 5,
         list:"tickmarks",
         type:"range"
        },
        {
         id:2,
         filterName:'backgroundRepeat',
         string: 'background-repeat',
         min:0,
         max:10,
         step:0.1,
         suffix:'',
         value: 5,
         list:"tickmarks",
         type:"range"

        },
        {
         id:3,
         filterName:'backgroundImage',
         string: 'background-image',
         min:0,
         max:10,
         step:0.01,
         suffix:'',
         value: 5,
         list:"tickmarks",
         type:"range"

        }
        ,
        {
         id:4,
         filterName:'opacity',
         string: 'opacity',
         min:0,
         max:1,
         step:0.1,
         suffix:'',
         value: 1,
         list:"tickmarks",
         type:"range"

        },
        {
         id:5,
         filterName:'blur',
         string: 'blur',
         min:0,
         max:10,
         step:0.1,
         suffix:'',
         value: 0,
         list:"tickmarks",
         type:"range"

        },
        {
         id:6,
         filterName:'saturate',
         string: 'saturate',
         min:0,
         max:100,
         step:0.1,
         suffix:'',
         value: 0,
         list:"tickmarks",
         type:"range"

        },
        {
         id:7,
         filterName:'contrast',
         string: 'contrast',
         min:0,
         max:100,
         step:0.1,
         suffix:'',
         value: 100,
         list:"tickmarks",
         type:"range"

        },
        {
         id:8,
         filterName:'brightness',
         string: 'brightness',
         min:0,
         max:100,
         step:0.1,
         suffix:'',
         value: 100,
         list:"tickmarks",
         type:"range"

        },
        {
         id:9,
         filterName:'sepia',
         string: 'sepia',
         min:0,
         max:100,
         step:0.1,
         suffix:'',
         value: 7,
         list:"tickmarks",
         type:"range"

        },
        {
         id:10,
         filterName:'grayScale',
         string: 'grayscale',
         min:0,
         max:100,
         step:0.1,
         suffix:'',
         value: 0,
         list:"tickmarks",
         type:"range"

        },
        {
         id:11,
         filterName:'url',
         string: 'url',
         min:0,
         max:10,
         step:0.01,
         suffix:'',
         value: 6,
         list:"tickmarks",
         type:"range"

        },
        {
         id:12,
         filterName:'invert',
         string: 'invert',
         min:0,
         max:100,
         step:0.1,
         suffix:'',
         value: 5,
         list:"tickmarks",
         type:"range"

        },
        {
         id:13,
         filterName:'hueRotate',
         string: 'hue-rotate',
         min:0,
         max:360,
         step:0.1,
         suffix:'',
         value: 4,
         list:"tickmarks",
         type:"range"

        },
        {
         id:14,
         filterName:'backgroundSize',
         string: 'background-size',
         min:0,
         max:10,
         step:0.01,
         suffix:'',
         value: 3,
         list:"tickmarks",
         type:"range"

        },
        {
         id:15,
         filterName:'backgroundBlendMode',
         string: 'background-blend-mode',
         min:0,
         max:10,
         step:0.01,
         suffix:'',
         value: 2,
         list:"tickmarks",
         type:"range"

        },
        {
         id:16,
         filterName:'mixBlendMode',
         string: 'mix-blend-mode',
         min:0,
         max:10,
         step:0.01,
         suffix:'',
         value: 1,
         list:"tickmarks",
         type:"range"

        }
    ]
};


export default (state = initialState, action) => {
  switch (action.type) {
      case CHOOSE_FILTER:
          return {
              ...state,
              chosenFilter: action.payload
          };

    default:
      return state;
  }
}



export const choose_filter = (filter) => {
    return dispatch => {
        dispatch({
            type: CHOOSE_FILTER,
            payload: filter
        })
    }
};
