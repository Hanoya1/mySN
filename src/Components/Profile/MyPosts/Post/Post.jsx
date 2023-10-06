import React from "react";
import s from './Post.module.css'

const Post = () => {
   return (
      <div className={s.item}>
         <img src='https://dthezntil550i.cloudfront.net/kg/latest/kg1802132010216500004834729/1280_960/557d644f-12f3-49e1-bb66-23c16400540d.png'></img>
         post 1
         <div>
            <span>like</span>
            <button>Like!</button>
         </div>
      </div>
   )
}

export default Post