import './App.css';
import React from 'react';
import Header from './Components/Header/Header';
import Nav from './Components/Navbar/Nav';
import Profile from './Components/Profile/Profile';
import Dialogs from './Components/Dialogs/Dialogs';

const App = (props) => {
   return (
      <div className='app-wrapper'>
         <Header />
         <Nav />
         {/* <Profile /> */}
         <div className='app-wrapper-content'>
            <Dialogs />
         </div>
      </div>
   );
}

export default App;
