import React from "react";
import s from './Dialogs.module.css'
import { NavLink } from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";

const Message = (props) => {
   return (
      <div>{props.message}</div>
   )
}

const Dialogs = (props) => {
   return (
      <div className={s.dialogs}>
         <div className={s.dialogsItems}>
            <DialogItem name='Dima' id={1} />
            <DialogItem name='Dima' id={2} />
            <DialogItem name='Dima' id={3} />
            <DialogItem name='Dima' id={4} />
            <DialogItem name='Dima' id={5} />
            <DialogItem name='Dima' id={6} />
         </div>
         <div className={s.messages}>
            <Message className={s.message} message='Hi! Im trying to do my best' />
            <Message className={s.message} message='And how are u doing?' />
            <Message className={s.message} message="I'll still trying" />
         </div>
      </div>
   )
}
export default Dialogs