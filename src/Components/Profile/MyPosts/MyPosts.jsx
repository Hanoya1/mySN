import React from "react";
import Post from "./Post/Post";
import s from './MyPosts.module.css'

const MyPosts = () => {
   return (
      <div>
         My posts
         <div>
            <textarea></textarea>
            <button>Add post</button>
         </div>
         <div className={s.posts}>
            <Post message='Hi, im trying to make my first project' likesCount='120' />
            <Post message='Hi, sounds great!' likesCount='11' />
         </div>
      </div>
   );
}

export default MyPosts;