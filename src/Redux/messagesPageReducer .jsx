let SEND_MESSAGE = 'SEND-MESSAGE';
let UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

let initialState = {
   dialogs: [
      { id: 1, name: 'Dimych', src: 'https://images.pexels.com/photos/16840671/pexels-photo-16840671.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' },
      { id: 2, name: 'Dimych', src: 'https://images.pexels.com/photos/16840671/pexels-photo-16840671.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' },
      { id: 3, name: 'Dimych', src: 'https://images.pexels.com/photos/16840671/pexels-photo-16840671.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' },
      { id: 4, name: 'Dimych', src: 'https://images.pexels.com/photos/16840671/pexels-photo-16840671.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' },
      { id: 5, name: 'Dimych', src: 'https://images.pexels.com/photos/16840671/pexels-photo-16840671.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' },
   ],
   messages: [
      { message: "I'll do it!!!" },
      { message: "I'll do it!!!" },
      { message: "I'll do it!!!" },
      { message: "I'll do it!!!" },
      { message: "I'll do it!!!" },
   ],
   newMessageText: 'Hi!!!'
}

const messagesPageReducer = (state = initialState, action) => {
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