import { fromJS } from 'immutable';
import uuid from 'uuid';
export const ADD_LAYER = 'layers/ADD_LAYER'
export const DELETE_LAYER = 'layers/DELETE_LAYER'




const initialState = {
    layerCount: 2,
    layers: [
        {
            id: uuid.v4(),
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
    default:
      return state
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
            backgroundImage: 'http://cdn-img.health.com/sites/default/files/styles/medium_16_9/public/styles/main/public/strawberry-seeds-crohns-400x400.jpg?itok=0cqj-sNb',
            opacity: 0.8,
            blur: 4,
            saturate: 5,
            contrast: 20,
            sepia: .2,
            grayScale: .2,
            invert: .2,
            hueRotate: '90deg',
            backgroundSize: '100%',
            backgroundBlendMode: 'multiply',
            mixBlendMode: 'multiply'
        }
    }
    console.log(newLayer);
  return dispatch => {
    dispatch({
      type: ADD_LAYER,
      newLayer
    })
  }
};


export const delete_layer = (x) => {
    return dispatch => {
        dispatch({
            type: DELETE_LAYER,
            payload: x
        })
    }
};
