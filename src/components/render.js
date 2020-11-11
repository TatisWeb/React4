import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter} from 'react-router-dom'; 
import {addPost} from './state.js';
import {addMessage} from './state';
import App from './App.js';
import state from './state.js';

export let renderEntireTree = (state) => {
 
ReactDom.render(
<BrowserRouter>
<App state={state} addPost={addPost} addMessage={addMessage}/>
</BrowserRouter>,document.getElementById('root'))
  
};

export default renderEntireTree;