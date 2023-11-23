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
         { id: 1, name: 'Dimych' },
         { id: 2, name: 'Dimych' },
         { id: 3, name: 'Dimych' },
         { id: 4, name: 'Dimych' },
         { id: 5, name: 'Dimych' },
      ],
      messages: [
         { message: "I'll do it!!!" },
         { message: "I'll do it!!!" },
         { message: "I'll do it!!!" },
         { message: "I'll do it!!!" },
         { message: "I'll do it!!!" },
      ]
   }
}

export default state