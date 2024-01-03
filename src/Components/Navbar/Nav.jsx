import React from "react";
import s from './Nav.module.css'
import { NavLink } from "react-router-dom";
import FriendsList from "./FriendsBar/FriendsList";

const Nav = (props) => {
   // let friendsElements = props.friendsList.friends.map(d => <FriendsList name={d.name} src={d.src} />);
   return (
      <nav className={s.nav}>
         <div className={s.item}>
            <NavLink to='/profile'>Profile</NavLink>
         </div>
         <div className={s.item}>
            <NavLink to='/dialogs'>Dialogs</NavLink>
         </div>
         <div className={s.item}>
            <NavLink to='/users'>Users</NavLink>
         </div>
         <div className={s.item}>
            <a>Music</a>
         </div>
         <div className={s.friendsList}>
            {/* {friendsElements} */}
         </div>
      </nav >
   )
}

export default Nav