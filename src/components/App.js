import Content from './Content';
import Navbar from './Navbar';
import Header from './Header';
import Profile from './Profile';
import React from 'react';
import store from './state';
import './App.css';
import Post from './Post';
import { BrowserRouter, Route } from 'react-router-dom';
import Dialogs from './Dialogs';


const App = (props) => {     
   
    return ( 
    <BrowserRouter>
    
    <div className="app-wrapper">
    
    <Header />
    <Navbar />
    
    <Route path='/content' component={Content} />  
    <Route path='/post'    render={ () => <Post store={props.store} />} />
    <Route path='/dialogs' render={ () => <Dialogs store={props.store} />} />
    <Route path='/profile' render={ () =>
<Profile />} />
 
  </div>
  </BrowserRouter>
  
   );
};
 


export default App;
