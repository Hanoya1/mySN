import React from "react";
import Post from "./Post/Post";
import s from './MyPosts.module.css'
import { addPostActionCreator, updatePostTextActionCreator } from "../../../Redux/state";

const MyPosts = (props) => {
   let postsElements = props.posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount} />)

   let newPostElement = React.createRef();

   let addPost = () => {
      props.dispatch(addPostActionCreator());
   }

   let updatePostText = () => {
      let text = newPostElement.current.value;
      let action = updatePostTextActionCreator(text);
      props.dispatch(action);
   }

   return (
      <div>
         <h3>My posts</h3>
         <div>
            <div>
               <textarea ref={newPostElement} onChange={updatePostText} value={props.newPostText} />
            </div>
            <div>
               <button onClick={addPost}>Add post</button>
            </div>

         </div>
         <div className={s.posts}>
            {postsElements}
         </div>
      </div>
   );
}

export default MyPosts;