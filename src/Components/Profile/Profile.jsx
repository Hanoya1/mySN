import React from "react";
import s from './Profile.module.css'

const Profile = () => {
   return (
      <div className={s.content}>
         <img src='https://img.freepik.com/free-photo/space-background-realistic-starry-night-cosmos-shining-stars-milky-way-stardust-color-galaxy_1258-154643.jpg' alt='main img'></img>
         <div>
            ava + desc
         </div>
         <div>
            My posts
            <div>
               New post
            </div>
            <div className={s.content}>
               <div className={s.item}> post 1</div>
               <div className={s.item}> post 2</div>
            </div>
         </div>
      </div>
   )
}

export default Profile