let SEND_MESSAGE = 'SEND-MESSAGE';
let UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

const messagesPageReducer = (state, action) => {
   switch (action.type) {
      case SEND_MESSAGE:
         let newMessage = {
            message: state.newMessageText
         };
         state.messages.push(newMessage);
         state.newMessageText = '';
         return state;
      case UPDATE_MESSAGE_TEXT:
         state.newMessageText = action.text;
         return state;
      default:
         return state;
   }
}


export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE });
export const updateMessageTextActionCreator = (text) => ({ type: UPDATE_MESSAGE_TEXT, text: text });

export default messagesPageReducer