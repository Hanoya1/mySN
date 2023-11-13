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
   let dialogsItems = [
      { id: 1, name: 'Dimych' },
      { id: 2, name: 'Dimych' },
      { id: 3, name: 'Dimych' },
      { id: 4, name: 'Dimych' },
      { id: 5, name: 'Dimych' },
   ]

   let dialogsElements = dialogsItems.map(d => <DialogItem name={d.name} id={d.id} />);

   let messagesItems = [
      { message: "I'll do it!!!" },
      { message: "I'll do it!!!" },
      { message: "I'll do it!!!" },
      { message: "I'll do it!!!" },
      { message: "I'll do it!!!" },
   ]

   let messagesElements = messagesItems.map(m => <Message className={s.message} message={m.message} />)
   return (
      <div className={s.dialogs}>
         <div className={s.dialogsItems}>
            {dialogsElements}
         </div>
         <div className={s.messages}>
            {messagesElements}
         </div>
      </div>
   )
}
export default Dialogs