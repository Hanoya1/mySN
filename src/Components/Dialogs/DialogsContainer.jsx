import React from "react";
import s from './Dialogs.module.css'
import { NavLink, Route } from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { sendMessageActionCreator, updateMessageTextActionCreator } from "../../Redux/messagesPageReducer ";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

   let state = props.store.getState();

   let sendMessage = () => {
      props.store.dispatch(sendMessageActionCreator());
   }

   let updateMessageText = (text) => {
      let action = updateMessageTextActionCreator(text)
      props.store.dispatch(action);
   }

   return (
      <Dialogs sendMessage={sendMessage} updateMessageText={updateMessageText} dialogs={state.messagesPage.dialogs} messages={state.messagesPage.messages} newMessageText={state.messagesPage.newMessageText} />
   )
}
export default DialogsContainer