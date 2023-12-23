import React from "react";

let store = {
   _state: {
      profilePage: {
         posts: [
            { id: 1, message: "Hi, im trying to make my first project", likesCount: '120' },
            { id: 2, message: "Hi, sounds great!", likesCount: '11' }
         ],
         newPostText: 'my first social network'
      },
      messagesPage: {
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
      },
      friendsList: {
         friends: [
            { id: 1, name: "Dimych", src: 'https://images.pexels.com/photos/16840671/pexels-photo-16840671.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' },
            { id: 2, name: "Dimych", src: 'https://images.pexels.com/photos/16840671/pexels-photo-16840671.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' },
            { id: 3, name: "Dimych", src: 'https://images.pexels.com/photos/16840671/pexels-photo-16840671.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }
         ]
      },
   },
   _callSubscriber() {

   },

   subscribe(observer) {
      this._callSubscriber = observer;
   },
   getState() {
      return this._state;
   },

   dispatch(action) {
      if (action.type === 'ADD-POST') {
         let newPost = {
            id: 3,
            message: this._state.profilePage.newPostText,
            likesCount: 0
         };
         this._state.profilePage.posts.push(newPost);
         this._state.profilePage.newPostText = '';
         this._callSubscriber(this._state);
      } else if (action.type === 'UPDATE-POST-TEXT') {
         this._state.profilePage.newPostText = action.text;
         this._callSubscriber(this._state)
      } else if (action.type === 'SEND-MESSAGE') {
         let newMessage = {
            message: this._state.messagesPage.newMessageText
         };
         this._state.messagesPage.messages.push(newMessage);
         this._state.messagesPage.newMessageText = '';
         this._callSubscriber(this._state);
      } else if (action.type === 'UPDATE-MESSAGE-TEXT') {
         this._state.messagesPage.newMessageText = action.text;
         this._callSubscriber(this._state);
      }
   },
}

export default store;
window.store = store;

// addPost(postText) {
//    let newPost = {
//       id: 3,
//       message: this._state.profilePage.newPostText,
//       likesCount: 0
//    };
//    this._state.profilePage.posts.push(newPost);
//    this._state.profilePage.newPostText = '';
//    this._callSubscriber(this._state);
// },
// updatePostText(newText) {
//    this._state.profilePage.newPostText = newText;
//    this._callSubscriber(this._state)
// },
// sendMessage(messageText) {
//    let newMessage = {
//       message: this._state.messagesPage.newMessageText
//    };
//    this._state.messagesPage.messages.push(newMessage);
//    this._state.messagesPage.newMessageText = '';
//    this._callSubscriber(this._state);
// },
// updateMessageText(newText) {
//    this._state.messagesPage.newMessageText = newText;
//    this._callSubscriber(this._state);
// },
