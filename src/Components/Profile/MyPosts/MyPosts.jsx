import React from "react";
import Post from "./Post/Post";
import s from './MyPosts.module.css'

const MyPosts = () => {

   let postsData = [
      { message: "Hi, im trying to make my first project", likesCount: '120' },
      { message: "Hi, sounds great!", likesCount: '11' }
   ]

   let postsElements = postsData.map(p => <Post message={p.message} likesCount={p.likesCount} />)

   return (
      <div>
         <h3>My posts</h3>
         <div>
            <div>
               <textarea></textarea>
            </div>
            <div>
               <button>Add post</button>
            </div>

         </div>
         <div className={s.posts}>
            {postsElements}
         </div>
      </div>
   );
}

export default MyPosts;