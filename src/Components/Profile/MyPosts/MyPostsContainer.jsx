import React from "react";
import { addPostActionCreator, updatePostTextActionCreator } from "../../../Redux/profilePageReducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
   return {
      profilePage: state.profilePage
   }
}

let mapDispatchToProps = (dispatch) => {
   return {
      addPost: () => {
         dispatch(addPostActionCreator());
      },
      updatePostText: (text) => {
         dispatch(updatePostTextActionCreator(text));
      }
   }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;

// const MyPostsContainer = (props) => {

//    let state = props.store.getState();

//    let addPost = () => {
//       props.store.dispatch(addPostActionCreator());
//    }

//    let updatePostText = (text) => {
//       let action = updatePostTextActionCreator(text);
//       props.store.dispatch(action);
//    }

//    return (
//       <MyPosts addPost={addPost} updatePostText={updatePostText} posts={state.profilePage.posts} newPostText={state.profilePage.newPostText} />
//    );

// }
