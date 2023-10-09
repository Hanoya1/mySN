import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";


const Profile = () => {
   return (
      <div>
         <img src='https://img.freepik.com/free-photo/space-background-realistic-starry-night-cosmos-shining-stars-milky-way-stardust-color-galaxy_1258-154643.jpg' alt='main img'></img>
         <div>
            ava + desc
         </div>
         <MyPosts />
      </div>
   )
}

export default Profile