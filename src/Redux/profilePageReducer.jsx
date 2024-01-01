let ADD_POST = 'ADD-POST';
let UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

let initialState = {
   posts: [
      { id: 1, message: "Hi, im trying to make my first project", likesCount: '120' },
      { id: 2, message: "Hi, sounds great!", likesCount: '11' }
   ],
   newPostText: 'my first social network'
}

const profilePageReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_POST: {
         let newPost = {
            id: 3,
            message: state.newPostText,
            likesCount: 0
         };
         return {
            ...state,
            posts: [...state.posts, newPost],
            newPostText: ''

         };
      }
      case UPDATE_POST_TEXT: {
         return {
            ...state,
            newPostText: action.text
         };
      }
      default:
         return state
   }
}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updatePostTextActionCreator = (text) => ({ type: UPDATE_POST_TEXT, text: text });

export default profilePageReducer