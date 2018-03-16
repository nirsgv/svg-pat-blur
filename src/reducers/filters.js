import { fromJS } from 'immutable';
import uuid from 'uuid';
import rndArr from '../helpers';
export const CHOOSE_FILTER = 'layers/CHOOSE_FILTER';


const initialState = {
    chosenFilter: 'opacity',
    filtersData: [
        {
         id:1,
         filterName:'opacity',
         string: 'opacity',
         label: 'Opacity',
         min:0,
         max:1,
         step:1,
         suffix:'',
         value: 1,
         list:`<datalist id="opacityTickmarks">
                   <option value="0" label="0%"/>
                   <option value="10"/>
                   <option value="20"/>
                   <option value="30"/>
                   <option value="40"/>
                   <option value="50" label="50%"/>
                   <option value="60"/>
                   <option value="70"/>
                   <option value="80"/>
                   <option value="90"/>
                   <option value="100" label="100%"/>
               </datalist>`,
         type:"range"
        },
        {
         id:2,
         filterName:'backgroundRepeat',
         string: 'background-repeat',
         label:'Background repeat',
         modes: [
             'repeat',
             'repeat-x',
             'repeat-y',
             'round',
             'space',
             'no-repeat',
         ],
         min:0,
         max:10,
         step:1,
         suffix:'',
         value: 5,
         list:`<datalist id="backgroundRepeatTickmarks">
                <option value="0" label="0%"/>
                <option value="10"/>
                <option value="20"/>
                <option value="30"/>
                <option value="40"/>
                <option value="50" label="50%"/>
                <option value="60"/>
                <option value="70"/>
                <option value="80"/>
                <option value="90"/>
                <option value="100" label="100%"/>
               </datalist>`,
        type:"range"
        },
        {
         id:3,
         filterName:'backgroundImage',
         string: 'background-image',
         label:'Background Image',
         min:0,
         max:10,
         step:1,
         suffix:'',
         value: 5,
         type:"range",
         list:`<datalist id="backgroundImageTickmarks">
                   <option value="0" label="0%"/>
                   <option value="10"/>
                   <option value="20"/>
                   <option value="30"/>
                   <option value="40"/>
                   <option value="50" label="50%"/>
                   <option value="60"/>
                   <option value="70"/>
                   <option value="80"/>
                   <option value="90"/>
                   <option value="100" label="100%"/>
               </datalist>`,

        }
        ,
        {
         id:4,
         filterName:'color',
         string:'color',
         label:'Color',
         min:0,
         max:10,
         step:1,
         suffix:'',
         value: 5,
         type:"range",
         list:`<datalist id="colorTickmarks">
                   <option value="0" label="0%"/>
                   <option value="10"/>
                   <option value="20"/>
                   <option value="30"/>
                   <option value="40"/>
                   <option value="50" label="50%"/>
                   <option value="60"/>
                   <option value="70"/>
                   <option value="80"/>
                   <option value="90"/>
                   <option value="100" label="100%"/>
               </datalist>`,
        },
        {
         id:5,
         filterName:'blur',
         string: 'blur',
         label: 'Blur',
         min:0,
         max:10,
         step:1,
         suffix:'',
         value: 0,
         type:"range",
         list:`<datalist id="blurTickmarks">
                   <option value="0" label="0%"/>
                   <option value="10"/>
                   <option value="20"/>
                   <option value="30"/>
                   <option value="40"/>
                   <option value="50" label="50%"/>
                   <option value="60"/>
                   <option value="70"/>
                   <option value="80"/>
                   <option value="90"/>
                   <option value="100" label="100%"/>
               </datalist>`,

        },
        {
         id:6,
         filterName:'saturate',
         string: 'saturate',
         label: 'Saturate',
         min:0,
         max:100,
         step:1,
         suffix:'',
         value: 0,
         type:"range",
         list:`<datalist id="saturateTickmarks">
                   <option value="0" label="0%"/>
                   <option value="10"/>
                   <option value="20"/>
                   <option value="30"/>
                   <option value="40"/>
                   <option value="50" label="50%"/>
                   <option value="60"/>
                   <option value="70"/>
                   <option value="80"/>
                   <option value="90"/>
                   <option value="100" label="100%"/>
               </datalist>`,

        },
        {
         id:7,
         filterName:'contrast',
         string: 'contrast',
         label: 'Contrast',
         min:0,
         max:100,
         step:1,
         suffix:'',
         value: 100,
         type:"range",
         list:`<datalist id="contrastTickmarks">
                   <option value="0" label="0%"/>
                   <option value="10"/>
                   <option value="20"/>
                   <option value="30"/>
                   <option value="40"/>
                   <option value="50" label="50%"/>
                   <option value="60"/>
                   <option value="70"/>
                   <option value="80"/>
                   <option value="90"/>
                   <option value="100" label="100%"/>
               </datalist>`,

        },
        {
         id:8,
         filterName:'brightness',
         string: 'brightness',
         label: 'Brightness',
         min:0,
         max:100,
         step:1,
         suffix:'',
         value: 100,
         type:"range",
         list:`<datalist id="brightnessTickmarks">
                   <option value="0" label="0%"/>
                   <option value="10"/>
                   <option value="20"/>
                   <option value="30"/>
                   <option value="40"/>
                   <option value="50" label="50%"/>
                   <option value="60"/>
                   <option value="70"/>
                   <option value="80"/>
                   <option value="90"/>
                   <option value="100" label="100%"/>
               </datalist>`,

        },
        {
         id:9,
         filterName:'sepia',
         string: 'sepia',
         label: 'Sepia',
         min:0,
         max:100,
         step:1,
         suffix:'',
         value: 7,
         type:"range",
         list:`<datalist id="sepiaTickmarks">
                   <option value="0" label="0%"/>
                   <option value="10"/>
                   <option value="20"/>
                   <option value="30"/>
                   <option value="40"/>
                   <option value="50" label="50%"/>
                   <option value="60"/>
                   <option value="70"/>
                   <option value="80"/>
                   <option value="90"/>
                   <option value="100" label="100%"/>
               </datalist>`,

        },
        {
         id:10,
         filterName:'grayScale',
         string: 'grayscale',
         label: 'Grayscale',
         min:0,
         max:100,
         step:1,
         suffix:'',
         value: 0,
         type:"range",
         list:`<datalist id="grayScaleTickmarks">
                   <option value="0" label="0%"/>
                   <option value="10"/>
                   <option value="20"/>
                   <option value="30"/>
                   <option value="40"/>
                   <option value="50" label="50%"/>
                   <option value="60"/>
                   <option value="70"/>
                   <option value="80"/>
                   <option value="90"/>
                   <option value="100" label="100%"/>
               </datalist>`,

        },
        {
         id:11,
         filterName:'url',
         string: 'url',
         label: 'Url',
         min:0,
         max:10,
         step:1,
         suffix:'',
         value: 6,
         type:"range",
         list:`<datalist id="urlTickmarks">
                   <option value="0" label="0%"/>
                   <option value="10"/>
                   <option value="20"/>
                   <option value="30"/>
                   <option value="40"/>
                   <option value="50" label="50%"/>
                   <option value="60"/>
                   <option value="70"/>
                   <option value="80"/>
                   <option value="90"/>
                   <option value="100" label="100%"/>
               </datalist>`,

        },
        {
         id:12,
         filterName:'invert',
         string: 'invert',
         label: 'Invert',
         min:0,
         max:100,
         step:1,
         suffix:'',
         value: 5,
         type:"range",
         list:`<datalist id="invertTickmarks">
                   <option value="0" label="0%"/>
                   <option value="10"/>
                   <option value="20"/>
                   <option value="30"/>
                   <option value="40"/>
                   <option value="50" label="50%"/>
                   <option value="60"/>
                   <option value="70"/>
                   <option value="80"/>
                   <option value="90"/>
                   <option value="100" label="100%"/>
               </datalist>`,

        },
        {
         id:13,
         filterName:'hueRotate',
         string: 'hue-rotate',
         label: 'Hue-rotate',
         min:0,
         max:360,
         step:1,
         suffix:'',
         value: 4,
         type:"range",
         list:`<datalist id="hueRotateTickmarks">
                   <option value="0" label="0%"/>
                   <option value="10"/>
                   <option value="20"/>
                   <option value="30"/>
                   <option value="40"/>
                   <option value="50" label="50%"/>
                   <option value="60"/>
                   <option value="70"/>
                   <option value="80"/>
                   <option value="90"/>
                   <option value="100" label="100%"/>
               </datalist>`,

        },
        {
         id:14,
         filterName:'backgroundSize',
         string: 'background-size',
         label: 'Background size',
         min:1,
         max:100,
         step:1,
         suffix:'',
         value: 3,
         type:"range",
         list:`<datalist id="backgroundSizeTickmarks">
                   <option value="0" label="0%"/>
                   <option value="10"/>
                   <option value="20"/>
                   <option value="30"/>
                   <option value="40"/>
                   <option value="50" label="50%"/>
                   <option value="60"/>
                   <option value="70"/>
                   <option value="80"/>
                   <option value="90"/>
                   <option value="100" label="100%"/>
               </datalist>`,

        },
        {
         id:15,
         filterName:'backgroundBlendMode',
         string: 'background-blend-mode',
         label: 'Background blend mode',
         modes:[
             'normal',
             'multiply',
             'screen',
             'overlay',
             'darken',
             'lighten',
             'color-dodge',
             'saturation',
             'color',
             'luminosity'
         ],
         min:0,
         max:10,
         step:1,
         suffix:'',
         value: 2,
         type:"range",
         list:`<datalist id="backgroundBlendModeTickmarks">
                   <option value="0" label="0%"/>
                   <option value="10"/>
                   <option value="20"/>
                   <option value="30"/>
                   <option value="40"/>
                   <option value="50" label="50%"/>
                   <option value="60"/>
                   <option value="70"/>
                   <option value="80"/>
                   <option value="90"/>
                   <option value="100" label="100%"/>
               </datalist>`,

        },
        {
         id:16,
         filterName:'mixBlendMode',
         string: 'mix-blend-mode',
         label: 'Mix blend mode',
         modes: [
             'normal',
             'multiply',
             'screen',
             'overlay',
             'darken',
             'lighten',
             'color-dodge',
             'color-burn',
             'hard-light',
             'soft-light',
             'difference',
             'exclusion',
             'hue',
             'saturation',
             'color',
             'luminosity',
         ],
         min:0,
         max:10,
         step:1,
         suffix:'',
         value: 1,
         type:"range",
         list:`<datalist id="mixBlendModeTickmarks">
                   <option value="0" label="0%"/>
                   <option value="10"/>
                   <option value="20"/>
                   <option value="30"/>
                   <option value="40"/>
                   <option value="50" label="50%"/>
                   <option value="60"/>
                   <option value="70"/>
                   <option value="80"/>
                   <option value="90"/>
                   <option value="100" label="100%"/>
               </datalist>`,

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
