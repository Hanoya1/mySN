import React from "react";
import Post from "./Post/Post";
import s from './MyPosts.module.css'

const MyPosts = (props) => {
   let postsElements = props.profilePage.posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount} />)

   let newPostElement = React.createRef();

   let addPost = () => {
      props.addPost()
   }

   let updatePostText = () => {
      let text = newPostElement.current.value;
      props.updatePostText(text);
   }

   return (
      <div>
         <h3>My posts</h3>
         <div>
            <div>
               <textarea ref={newPostElement} onChange={updatePostText} value={props.profilePage.newPostText} />
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