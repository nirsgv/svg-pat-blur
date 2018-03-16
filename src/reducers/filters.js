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
         step:.01,
         suffix:'',
         value: 1,
         datalist:`<datalist id="opacityTickmarks">
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
            datalistId:'opacityTickmarks',
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
         datalist:`<datalist id="backgroundRepeatTickmarks">
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
            datalistId:'backgroundRepeatTickmarks',
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
         datalist:`<datalist id="backgroundImageTickmarks">
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
            datalistId:'backgroundImageTickmarks',

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
         datalist:`<datalist id="colorTickmarks">
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
            datalistId:'colorTickmarks',
        },
        {
         id:5,
         filterName:'blur',
         string: 'blur',
         label: 'Blur',
         min:0,
         max:10,
         step:.5,
         suffix:'',
         value: 0,
         type:"range",
         datalist:`<datalist id="blurTickmarks">
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
            datalistId:'blurTickmarks',

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
         datalist:`<datalist id="saturateTickmarks">
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
            datalistId:'saturateTickmarks',

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
         datalist:`<datalist id="contrastTickmarks">
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
            datalistId:'contrastTickmarks',

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
         datalist:`<datalist id="brightnessTickmarks">
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
            datalistId:'brightnessTickmarks',
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
         datalist:`<datalist id="sepiaTickmarks">
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
            datalistId:'sepiaTickmarks',

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
         datalist:`<datalist id="grayScaleTickmarks">
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
            datalistId:'grayScaleTickmarks',

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
         datalist:`<datalist id="urlTickmarks">
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
            datalistId:'urlTickmarks',

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
         datalist:`<datalist id="invertTickmarks">
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
            datalistId:'invertTickmarks',

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
         datalist:`<datalist id="hueRotateTickmarks">
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
            datalistId:'hueRotateTickmarks',

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
         datalist:`<datalist id="backgroundSizeTickmarks">
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
            datalistId:'backgroundSizeTickmarks',

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
         datalist:`<datalist id="backgroundBlendModeTickmarks">
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
            datalistId:'backgroundBlendModeTickmarks',

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
         datalist:`<datalist id="mixBlendModeTickmarks">
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
            datalistId:'mixBlendModeTickmarks',

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
