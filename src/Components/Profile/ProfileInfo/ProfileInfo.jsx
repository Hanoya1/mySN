import React from "react";
import s from './ProfileInfo.module.css'


const ProfileInfo = () => {
   return (
      <div className={s.content}>
         <img src='https://img.freepik.com/free-photo/space-background-realistic-starry-night-cosmos-shining-stars-milky-way-stardust-color-galaxy_1258-154643.jpg' alt='main img'></img>
         <div className={s.description_block}>
            ava + desc
         </div>
      </div>
   )
}

export default ProfileInfo