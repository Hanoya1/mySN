import React from "react"
import s from './FriendsList.module.css'

const FriendsList = (props) => {
   return (
      <div className={s.friends}>
         <div className={s.friend}>{props.friends}</div>
      </div>
   )
}

export default FriendsList