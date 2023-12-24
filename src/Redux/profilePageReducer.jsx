let ADD_POST = 'ADD-POST';
let UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

const profilePageReducer = (state, action) => {
   switch (action.type) {
      case ADD_POST:
         let newPost = {
            id: 3,
            message: state.newPostText,
            likesCount: 0
         };
         state.posts.push(newPost);
         state.newPostText = '';
         return state
      case UPDATE_POST_TEXT:
         state.newPostText = action.text;
         return state
      default:
         return state
   }
}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updatePostTextActionCreator = (text) => ({ type: UPDATE_POST_TEXT, text: text });

export default profilePageReducer