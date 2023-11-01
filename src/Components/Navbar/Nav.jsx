import React from "react";
import s from './Nav.module.css'

const Nav = () => {
   return (
      <nav className={s.nav}>
         <div className={s.item}>
            <a href='profile'>Profile</a>
         </div>
         <div className={`${s.item} ${s.active}`}>
            <a href='dialogs'>Dialogs</a>
         </div>
         <div className={s.item}>
            <a>News</a>
         </div>
         <div className={s.item}>
            <a>Music</a>
         </div>
      </nav>
   )
}

export default Nav