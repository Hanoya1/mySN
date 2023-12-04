import React from "react";

let state = {
   profilePage: {
      posts: [
         { message: "Hi, im trying to make my first project", likesCount: '120' },
         { message: "Hi, sounds great!", likesCount: '11' }
      ]
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
      ]
   },
   friendsList: {
      friends: [
         { name: "Dimych" },
         { name: "Dimych" },
         { name: "Dimych" }
      ]
   }
}

export default state