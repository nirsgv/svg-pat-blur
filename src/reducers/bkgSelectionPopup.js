import { fromJS } from 'immutable';
import uuid from 'uuid';
export const OPEN_BKG_SELECT_POPUP = 'bkgSelectionPopup/OPEN_BKG_SELECT_POPUP'




const initialState = {
    open: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
      case OPEN_BKG_SELECT_POPUP:
      return {
          ...state,
          open: !state.open,
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
      type: OPEN_BKG_SELECT_POPUP,
      newLayer
    })
  }
};


export const open_bkg_select_popup = ({isBksSelectionOn}) => {
    return dispatch => {
        dispatch({
            type: OPEN_BKG_SELECT_POPUP,
            payload: isBksSelectionOn
        })
    }
};