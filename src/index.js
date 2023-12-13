import './index.css';
import state, { subscribe } from './Redux/state';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { addPost, sendMessage, updateMessageText, updatePostText } from './Redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (state) => {
   root.render(
      <React.StrictMode>
         <App state={state} addPost={addPost} updatePostText={updatePostText} sendMessage={sendMessage} updateMessageText={updateMessageText} />
      </React.StrictMode>
   );
}

reportWebVitals();

rerenderEntireTree(state);

subscribe(rerenderEntireTree);
