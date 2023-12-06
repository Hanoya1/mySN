import React from "react"
import s from './FriendsList.module.css'

const FriendsList = (props) => {
   console.log(props)
   return (
      <div className={s.friends}>
         <div className={s.friend}>
            <img src={props.src}></img>
            <span>{props.name}</span>
         </div>
      </div>
   )
}

export default FriendsList