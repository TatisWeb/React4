import ReactDom from 'react-dom';
import Content from './Content';
import Navbar from './Navbar';
import Header from './Header';
import Profile from './Profile';
import React from 'react';

import './App.css';
import Post from './Post';
import { BrowserRouter, Route } from 'react-router-dom';
import Dialogs from './Dialogs';
import index from '../index.js';
import state from './state';

const App = (props) => {     
    
    
    return ( 
    <BrowserRouter>
    
    <div className="app-wrapper">
    
    <Header />
    <Navbar />
    
    <Route path='/content' component={Content} />  
    <Route path='/post'    render={ () => <Post addPost={props.addPost} state={props.state.profilesPage}/>} />
    <Route path='/dialogs' render={ () => <Dialogs addMessage={props.addMessage} state={props.state.messagesPage}/>} />
    <Route path='/profile' render={ () => <Profile />} />
 
  </div>
  </BrowserRouter>
  
   );
};
 


export default App;
