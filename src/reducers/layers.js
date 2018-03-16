import uuid from 'uuid';
import rndArr from '../helpers';
export const ADD_LAYER = 'layers/ADD_LAYER';
export const DELETE_LAYER = 'layers/DELETE_LAYER';
export const CHOOSE_LAYER = 'layers/CHOOSE_LAYER';
export const SET_STL = 'layers/SET_STL';


const tmpImgArray = [
    'http://cdn-img.health.com/sites/default/files/styles/medium_16_9/public/styles/main/public/strawberry-seeds-crohns-400x400.jpg?itok=0cqj-sNb',
    'https://cdn.pixabay.com/photo/2018/02/18/16/36/strawberry-3162743__340.jpg',
    'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/137301.jpg?output-format=webp&output-quality=60&resize=1000:*',
    'https://images-na.ssl-images-amazon.com/images/I/71ljdtdgHjL._SL1200_.jpg',
    'http://baketheneat.com/wp-content/uploads/2017/06/Peanut-Butter-and-Strawberry-Recipe-Images.jpg',
    'https://cdn.pixabay.com/photo/2018/02/25/22/29/strawberry-3181926__340.jpg'
];
const initialChosenLayedId = uuid.v4();

const initialState = {
    layerCount: 2,
    chosenLayerId: initialChosenLayedId,
    chosenLayerIdx: 0,
    layers: [
        {
            id: initialChosenLayedId,
            Key: uuid.v4(),
            cat: 'img',
            stl: {
                color: 'blue',
                backgroundRepeat: 'repeat',
                backgroundImage: 'http://cdn-img.health.com/sites/default/files/styles/medium_16_9/public/styles/main/public/strawberry-seeds-crohns-400x400.jpg?itok=0cqj-sNb',
                opacity: 0.8,
                blur: 10,
                saturate: 5,
                contrast: 20,
                sepia: .4,
                grayScale: .4,
                invert: .4,
                hueRotate: '180deg',
                backgroundSize: '100%',
                backgroundBlendMode: 'multiply',
                mixBlendMode: 'multiply'
            }
        }, {
            id: uuid.v4(),
            Key: uuid.v4(),
            cat: 'svg',
            stl: {
                position: 'absolute',
                color: 'blue',
                backgroundColor: 'rgba(255, 0, 0, 0.298039)',
                backgroundPosition: 'center center',
                backgroundRepeat: 'repeat',
                opacity: 0.8,
                blur: 0,
                saturate: 10,
                contrast: 10,
                sepia: .8,
                grayScale: .8,
                invert: .8,
                hueRotate: '90deg',
                backgroundSize: '75%',
                backgroundBlendMode: 'exclusion',
                mixBlendMode: 'exclusion',
                backgroundImage: 'http://cdn-img.health.com/sites/default/files/styles/medium_16_9/public/styles/main/public/strawberry-seeds-crohns-400x400.jpg?itok=0cqj-sNb',
            }
        }
    ]
};

export default (state = initialState, action) => {
  switch (action.type) {

      case ADD_LAYER:
      return {
          ...state,
          layers: state.layers.concat(action.newLayer),
          layerCount: state.layerCount+1
      };
      case DELETE_LAYER:
          return {
              ...state,
              layers: state.layers.filter(layer => layer.id !== action.payload),
              layerCount: state.layerCount-1
          };
      case CHOOSE_LAYER:
          return {
              ...state,
              chosenLayerId: action.payload[0],
              chosenLayerIdx: action.payload[1]
          };
      case SET_STL:
          return {
              ...state,
              layers:action.payload
          };
    default:
      return state;
  }
}


export const add_layer = () => {
    const newLayer = {
        //temp example layer
        id: uuid.v4(),
        Key: uuid.v4(),
        cat: 'img',
        stl: {
            color: 'blue',
            backgroundRepeat: 'repeat',
            backgroundImage: rndArr(tmpImgArray),
            opacity: 0.8,
            blur: 1,
            saturate: 1,
            contrast: 20,
            sepia: .2,
            grayScale: .2,
            invert: .2,
            hueRotate: '20deg',
            backgroundSize: '100%',
            backgroundBlendMode: 'normal',
            mixBlendMode: 'normal'
        }
    };
    console.log(newLayer);
  return dispatch => {
    dispatch({
      type: ADD_LAYER,
      newLayer
    })
  }
};


export const delete_layer = (id) => {
    return dispatch => {
        dispatch({
            type: DELETE_LAYER,
            payload: id
        })
    }
};

export const choose_layer = (id,idx) => {
    console.log(id,idx);
    return dispatch => {
        dispatch({
            type: CHOOSE_LAYER,
            payload: [id,idx]
        })
    }
};

export const set_stl = (val,chosenFilter,chosenLayerId,chosenLayerIdx,layers) => {
    //console.log(val,chosenFilter,chosenLayerId,layers);
    console.log(chosenLayerIdx);
    let newLayers = layers;
    newLayers[0].stl[chosenFilter] = val;
    //console.log(newLayers);
    return dispatch => {
        dispatch({
            type: SET_STL,
            payload: newLayers,
        })
    }
};