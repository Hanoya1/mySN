import React from "react";
import s from './Dialogs.module.css'
import { NavLink, Route } from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
   let dialogsElements = props.messagesPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} src={d.src} />);
   let messagesElements = props.messagesPage.messages.map(m => <Message className={s.message} message={m.message} />);
   let newMessageElement = React.createRef();

   let sendMessage = () => {
      let text = newMessageElement.current.value;
      alert(text)
   }

   return (
      <div className={s.dialogs}>
         <div className={s.dialogsItems}>
            {dialogsElements}
         </div>
         <div className={s.messages}>
            {/* <Route> </Route> */}
            {messagesElements}
            <div className={s.answerArea}>
               <textarea ref={newMessageElement}></textarea>
               <button onClick={sendMessage}>Send</button>
            </div>
         </div>
      </div>
   )
}
export default Dialogs