import ReactDom from 'react-dom';
import React from 'react';
import {BrowserRouter} from 'react-router-dom'; 
import {addMesage} from './components/state.js';
import App from './components/App.js';
import state from './components/state.js';
import {renderEntireTree} from './components/render';

renderEntireTree(state); 

