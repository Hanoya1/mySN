import './App.css';
import React from 'react';
import Header from './Components/Header/Header';
import Nav from './Components/Navbar/Nav';
import Profile from './Components/Profile/Profile';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DialogsContainer from './Components/Dialogs/DialogsContainer';

const App = (props) => {

   return (
      <BrowserRouter>
         <div className='app-wrapper'>
            <Header />
            <Nav friendsList={props.store} />
            <div className='app-wrapper-content'>
               <Routes>
                  <Route path='/dialogs/*' element={<DialogsContainer store={props.store} />} />
                  <Route path='/profile' element={<Profile store={props.store} />} />
               </Routes>
            </div>
         </div >
      </BrowserRouter >

   );
}

export default App;
