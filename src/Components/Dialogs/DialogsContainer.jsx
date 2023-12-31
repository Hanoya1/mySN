import { sendMessageActionCreator, updateMessageTextActionCreator } from "../../Redux/messagesPageReducer ";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
   return {
      messagesPage: state.messagesPage
   }
}

let mapDispatchToProps = (dispatch) => {
   return {
      sendMessage: () => {
         dispatch(sendMessageActionCreator());
      },
      updateMessageText: (text) => {
         dispatch(updateMessageTextActionCreator(text));
      }
   }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer

// const DialogsContainer = (props) => {

//    let state = props.store.getState();

//    let sendMessage = () => {
//       props.store.dispatch(sendMessageActionCreator());
//    }

//    let updateMessageText = (text) => {
//       let action = updateMessageTextActionCreator(text)
//       props.store.dispatch(action);
//    }

//    return (
//       <Dialogs sendMessage={sendMessage} updateMessageText={updateMessageText} dialogs={state.messagesPage.dialogs} messages={state.messagesPage.messages} newMessageText={state.messagesPage.newMessageText} />
//    )
// }