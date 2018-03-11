import uuid from 'uuid';
export const ADD_MEMBER = 'members/ADD_MEMBER'

const initialState = {
    team_members: [
            {
                id: 1,
                Key: uuid.v4(),
                name: 'segev',
                img: 'https://png.pngtree.com/element_pic/17/03/12/30e6f596814b927607f6d7b4cd53d380.jpg',
                items: []

            },         {
                id: 2,
                Key: uuid.v4(),
                name: 'shlomy',
                img: 'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_80%2Cw_300/MTE1ODA0OTcxODMzMTk4MDkz/renee-zellweger-9540674-1-402.jpg',
                items: []

            } ,         {
                id: 3,
                Key: uuid.v4(),
                name: 'menny',
                img: 'https://orig00.deviantart.net/a463/f/2011/172/b/b/3d_squidward_face_png_by_nasokakewe-d3jkqro.png',
                items: []

            } ,         {
                id: 4,
                Key: uuid.v4(),
                name: 'micky',
                img: 'http://www.freepngimg.com/download/kanye_west/1-2-kanye-west-png-hd.png',
                items: []
            }
        ]
};

export default (state = initialState, action) => {
  switch (action.type) {

      case ADD_MEMBER:
      return {
          ...state,
          team_members: state.team_members.concat(action.newMember),
      };
    default:
      return state
  }
}


export const add_member = () => {
    const newMember = {
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
    };
    console.log(newMember);
  return dispatch => {
    dispatch({
      type: ADD_MEMBER,
      newMember
    })
  }
};

