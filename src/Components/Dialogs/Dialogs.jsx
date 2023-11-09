import React from "react";
import s from './Dialogs.module.css'
import { NavLink } from "react-router-dom";

const Dialogs = () => {
   return (
      <div className={s.dialogs}>
         <div className={s.dialogsItems}>
            <div className={s.dialog + ' ' + s.active}>
               <NavLink to='/1'>Roman</NavLink>
            </div>
            <div className={s.dialog}>
               <NavLink to='/2'>Roman</NavLink>
            </div>
            <div className={s.dialog}>
               <NavLink to='/3'>Roman</NavLink>
            </div>
            <div className={s.dialog}>
               <NavLink to='/4'>Roman</NavLink>
            </div>
         </div>
         <div className={s.messages}>
            <div className={s.message}>Hi! I'm trying to do my best</div>
            <div className={s.message}>And how are u doing?</div>
            <div className={s.message}>I'll still trying</div>
         </div>
      </div>
   )
}
export default Dialogs