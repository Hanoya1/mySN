import './App.css';
import React from 'react';
import Header from './Components/Header/Header';
import Nav from './Components/Navbar/Nav';
import Profile from './Components/Profile/Profile';
import Dialogs from './Components/Dialogs/Dialogs';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = (props) => {
   debugger
   return (
      <BrowserRouter>
         <div className='app-wrapper'>
            <Header />
            <Nav friendsList={props.state.friendsList} />
            <div className='app-wrapper-content'>
               <Routes>
                  <Route path='/dialogs/*' element={<Dialogs messagesPage={props.state.messagesPage} dispatch={props.dispatch} />} />
                  <Route path='/profile' element={<Profile profilePage={props.state.profilePage} dispatch={props.dispatch} />} />
               </Routes>
            </div>
         </div >
      </BrowserRouter >

   );
}

export default App;
