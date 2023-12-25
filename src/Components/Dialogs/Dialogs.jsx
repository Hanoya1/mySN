import React from "react";
import s from './Dialogs.module.css'
import { NavLink, Route } from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { sendMessageActionCreator, updateMessageTextActionCreator } from "../../Redux/messagesPageReducer ";

const Dialogs = (props) => {
   let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id} src={d.src} />);
   let messagesElements = props.messages.map(m => <Message className={s.message} message={m.message} />);
   let newMessageElement = React.createRef();

   let sendMessage = () => {
      props.sendMessage()
   }

   let updateMessageText = () => {
      let text = newMessageElement.current.value;
      props.updateMessageText(text)
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
               <textarea ref={newMessageElement} onChange={updateMessageText} value={props.newMessageText} />
               <button onClick={sendMessage}>Send</button>
            </div>
         </div>
      </div>
   )
}
export default Dialogs