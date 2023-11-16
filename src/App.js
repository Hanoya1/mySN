import './App.css';
import React from 'react';
import Header from './Components/Header/Header';
import Nav from './Components/Navbar/Nav';
import Profile from './Components/Profile/Profile';
import Dialogs from './Components/Dialogs/Dialogs';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = (props) => {
   let dialogs = [
      { id: 1, name: 'Dimych' },
      { id: 2, name: 'Dimych' },
      { id: 3, name: 'Dimych' },
      { id: 4, name: 'Dimych' },
      { id: 5, name: 'Dimych' },
   ]

   let messages = [
      { message: "I'll do it!!!" },
      { message: "I'll do it!!!" },
      { message: "I'll do it!!!" },
      { message: "I'll do it!!!" },
      { message: "I'll do it!!!" },
   ]

   let posts = [
      { message: "Hi, im trying to make my first project", likesCount: '120' },
      { message: "Hi, sounds great!", likesCount: '11' }
   ]

   return (
      <BrowserRouter>
         <div className='app-wrapper'>
            <Header />
            <Nav />
            <div className='app-wrapper-content'>
               <Routes>
                  <Route path='/dialogs/*' element={<Dialogs dialogs={dialogs} messages={messages} />} />
                  <Route path='/profile' element={<Profile posts={posts} />} />
               </Routes>
            </div>
         </div >
      </BrowserRouter >

   );
}

export default App;
